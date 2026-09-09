/* SkillUp central auth helper. Uses Supabase when configured; otherwise keeps the current local release working. */
(function(){
  const cfg=window.SKILLUP_SUPABASE_CONFIG||{};
  const configured=Boolean(cfg.url&&cfg.anonKey&&window.supabase);
  let client=null;
  if(configured) client=window.supabase.createClient(cfg.url,cfg.anonKey);

  async function getSession(){
    if(client){const {data,error}=await client.auth.getSession();if(error) throw error;return data.session;}
    const id=sessionStorage.getItem('skillup.central.session');
    return id?{user:{id}}:null;
  }
  async function requireAuth(next){
    const session=await getSession();
    if(!session){location.href='central-registration.html?next='+encodeURIComponent(next||location.href);return null;}
    return session;
  }
  async function signOut(){
    if(client) await client.auth.signOut();
    sessionStorage.removeItem('skillup.central.session');
  }
  async function getProfile(userId){
    if(client){const {data,error}=await client.from('skillup_profiles').select('*').eq('id',userId).maybeSingle();if(error) throw error;return data;}
    return JSON.parse(localStorage.getItem('skillup.central.profile.v1')||'null');
  }
  async function saveProgress(progress){
    if(!client) return {local:true};
    const {data:session}=await client.auth.getSession();
    if(!session.session) throw new Error('Authentication required');
    const row=Object.assign({},progress,{user_id:session.session.user.id,updated_at:new Date().toISOString()});
    const {data,error}=await client.from('skillup_progress').upsert(row,{onConflict:'user_id,subject,topic'}).select().single();
    if(error) throw error;return data;
  }
  window.SkillUpAuth={configured,getSession,requireAuth,signOut,getProfile,saveProgress,client};
})();
