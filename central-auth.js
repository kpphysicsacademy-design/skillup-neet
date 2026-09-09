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
  async function getSession(){
    if(!auth) return null;
    const user=auth.currentUser;
    return user?{user}:null;
  }
  async function requireAuth(next){
    const session=await getSession();
    if(!session){location.href='central-registration.html?next='+encodeURIComponent(next||location.href);return null;}
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
