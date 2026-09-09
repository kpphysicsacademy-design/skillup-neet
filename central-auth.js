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
  if(auth){
    authStateReady=new Promise(resolve=>{
      let unsubscribe=null;
      unsubscribe=auth.onAuthStateChanged(user=>{
        if(unsubscribe) unsubscribe();
        resolve(user||null);
      });
    });
  }

  async function getSession(){
    if(!auth) return null;
    const user=auth.currentUser||await authStateReady;
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
    sessionStorage.removeItem('skillup.central.session');
  }

  async function getProfile(userId){
    if(!db||!userId) return null;
    const snap=await db.collection('skillup_profiles').doc(userId).get();
    return snap.exists?snap.data():null;
  }

  async function saveProfile(profile){
    if(!db||!auth.currentUser) throw new Error('Authentication required');
    const row=Object.assign({},profile,{id:auth.currentUser.uid,user_id:auth.currentUser.uid,updated_at:new Date().toISOString()});
    await db.collection('skillup_profiles').doc(auth.currentUser.uid).set(row,{merge:true});
    return row;
  }

  async function saveProgress(progress){
    if(!db||!auth.currentUser) throw new Error('Authentication required');
    const subject=String(progress.subject||'').replace(/[^a-zA-Z0-9_-]/g,'_');
    const topic=String(progress.topic||'').replace(/[^a-zA-Z0-9_-]/g,'_');
    const id=auth.currentUser.uid+'_'+subject+'_'+topic;
    const row=Object.assign({},progress,{user_id:auth.currentUser.uid,updated_at:new Date().toISOString()});
    await db.collection('skillup_progress').doc(id).set(row,{merge:true});
    return row;
  }

  window.SkillUpAuth={configured,app,auth,db,getSession,requireAuth,signOut,getProfile,saveProfile,saveProgress};
})();
