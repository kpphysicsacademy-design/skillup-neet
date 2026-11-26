/* SkillUp central authentication helper. Uses Firebase Authentication when configured. */
(function(){
  const cfg=window.SKILLUP_FIREBASE_CONFIG||{};
  const configured=Boolean(cfg.apiKey&&cfg.authDomain&&cfg.projectId&&window.firebase);
  let app=null,auth=null,db=null;
  if(configured){
    app=window.firebase.apps.length?window.firebase.app():window.firebase.initializeApp(cfg);
    auth=window.firebase.auth();
    db=window.firebase.firestore();
  }

  // Firebase restores a persisted session asynchronously. Do not treat
  // auth.currentUser === null as signed out until the first auth-state
  // notification has arrived.
  let authStateReady=null;
  let sessionEpoch=0;
  let observedUid;
  function clearSessionMarker(){
    try{sessionStorage.removeItem('skillup.central.session');}catch(_){}
  }
  if(auth){
    authStateReady=new Promise((resolve,reject)=>{
      auth.onAuthStateChanged(user=>{
        const uid=user?.uid||null;
        if(observedUid!==uid){sessionEpoch++;observedUid=uid;clearSessionMarker();}
        resolve(user||null);
      },reject);
    });
  }

  async function getSession(){
    if(!auth) return null;
    await authStateReady;
    const user=auth.currentUser;
    return user?{user}:null;
  }

  async function requireAuth(next){
    const session=await getSession();
    if(!session){
      // Protected pages should send signed-out users to Login, not Registration.
      location.href='central-login.html?next='+encodeURIComponent(next||location.href);
      return null;
    }
    return session;
  }

  async function signOut(){
    if(auth) await auth.signOut();
    clearSessionMarker();
  }

  async function getProfile(userId){
    if(!db||!userId) return null;
    if(auth?.currentUser?.uid!==userId) throw new Error('Profile owner mismatch');
    const epoch=sessionEpoch;
    const snap=await db.collection('skillup_profiles').doc(userId).get();
    if(sessionEpoch!==epoch||auth?.currentUser?.uid!==userId) throw new Error('Account changed during profile read');
    return snap.exists?snap.data():null;
  }

  async function saveProfile(profile){
    const user=auth?.currentUser;
    if(!db||!user) throw new Error('Authentication required');
    const row=Object.assign({},profile,{id:user.uid,user_id:user.uid,updated_at:new Date().toISOString()});
    await db.collection('skillup_profiles').doc(user.uid).set(row,{merge:true});
    return row;
  }

  async function saveProgress(progress,guard){
    const user=auth?.currentUser;
    if(!db||!user) throw new Error('Authentication required');
    const subject=String(progress.subject||'').replace(/[^a-zA-Z0-9_-]/g,'_');
    const topic=String(progress.topic||'').replace(/[^a-zA-Z0-9_-]/g,'_');
    const id=user.uid+'_'+subject+'_'+topic;
    const row=Object.assign({},progress,{user_id:user.uid,updated_at:new Date().toISOString()});
    const ref=db.collection('skillup_progress').doc(id);
    if(guard){
      const epoch=sessionEpoch;
      const valid=()=>auth.currentUser?.uid===user.uid&&guard.owner===user.uid&&epoch===sessionEpoch;
      if(!valid()||!Number.isSafeInteger(guard.finishedAt))throw new Error('Invalid progress session');
      await db.runTransaction(async tx=>{
        const snap=await tx.get(ref);
        if(!valid())throw new Error('Account changed during progress write');
        const prior=snap.exists?snap.data():{};
        if(Number(prior.quiz_finished_at||0)>=guard.finishedAt)return;
        tx.set(ref,Object.assign({},row,{quiz_finished_at:guard.finishedAt}),{merge:true});
      });
    }else await ref.set(row,{merge:true});
    return row;
  }

  async function getProgress(subject){
    const user=auth?.currentUser;
    if(!db||!user) return [];
    const epoch=sessionEpoch;
    const snap=await db.collection('skillup_progress')
      .where('user_id','==',user.uid)
      .get();
    if(sessionEpoch!==epoch||auth.currentUser?.uid!==user.uid) throw new Error('Account changed during progress read');
    return snap.docs.map(d=>d.data()).filter(function(row){
      return String(row.subject||'').toLowerCase()===String(subject||'').toLowerCase();
    });
  }

  window.SkillUpAuth={getSessionEpoch:()=>sessionEpoch,configured,app,auth,db,getSession,requireAuth,signOut,getProfile,saveProfile,saveProgress,getProgress};
})();
