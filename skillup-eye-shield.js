/* SkillUp universal Eye Shield theme — warm, low-glare palette for longer study sessions. */
(() => {
  if (document.getElementById('skillup-eye-shield-style')) return;

  const palette = {
    background: '#F1F0E4',
    surface: '#FAF9F0',
    surfaceSoft: '#E8EBDD',
    text: '#2C382F',
    muted: '#647061',
    border: '#D3DCCB',
    accent: '#58775B',
    accentDark: '#446349',
    accentSoft: '#E3EBDD',
    success: '#3F734D',
    successSoft: '#E0EBDD',
    danger: '#A95145',
    dangerSoft: '#F3E3DC',
    gold: '#A77B32'
  };

  let themeMeta = document.querySelector('meta[name="theme-color"]');
  if (!themeMeta) {
    themeMeta = document.createElement('meta');
    themeMeta.name = 'theme-color';
    document.head.appendChild(themeMeta);
  }
  themeMeta.content = palette.background;

  const css = `
    :root {
      color-scheme: light !important;
      --bg: ${palette.background} !important;
      --background: ${palette.background} !important;
      --panel: ${palette.surface} !important;
      --panel2: ${palette.surfaceSoft} !important;
      --surface: ${palette.surface} !important;
      --surface-soft: ${palette.surfaceSoft} !important;
      --card: ${palette.surface} !important;
      --line: ${palette.border} !important;
      --border: ${palette.border} !important;
      --l: ${palette.border} !important;
      --ink: ${palette.text} !important;
      --text: ${palette.text} !important;
      --muted: ${palette.muted} !important;
      --blue: ${palette.accent} !important;
      --brand: ${palette.accent} !important;
      --brand2: ${palette.accentDark} !important;
      --navy: ${palette.accentDark} !important;
      --green: #6F8F69 !important;
      --green2: ${palette.accent} !important;
      --b: #78956E !important;
      --n: ${palette.accentDark} !important;
      --red: ${palette.danger} !important;
      --gold: ${palette.gold} !important;
      --shadow: 0 5px 18px rgba(57, 75, 53, .07) !important;
      accent-color: ${palette.accent} !important;
    }

    html {
      color-scheme: light !important;
      background: ${palette.background} !important;
      scroll-behavior: smooth;
    }
    body {
      color-scheme: light !important;
      background: ${palette.background} !important;
      background-image: none !important;
      color: ${palette.text} !important;
      accent-color: ${palette.accent} !important;
    }

    h1,h2,h3,h4,h5,h6,strong,b,label,legend,.question,.node-title,.post-author,.brand {
      color: ${palette.text} !important;
    }
    p,li,small,.muted,.sub,.desc,.hint,.meta,.side-note,.node-meta,.post-time,.post-text,.small {
      color: ${palette.muted} !important;
    }

    header,.top,.topbar,.header,.navbar,.app-header,.toolbar,.side-card,.side nav,
    nav:not(.skillup-bottom-nav):not(.tabs) {
      background: ${palette.surface} !important;
      color: ${palette.text} !important;
      border-color: ${palette.border} !important;
    }

    .card,.panel,.question-card,.quiz-card,.mission,.stat,.stat-card,.xp-card,.tile,
    .node-main,.subject,.chapter-card,.chapter a,.option,.options button,.choice,
    .answer-option,.option-btn,.answer,.question-container,.question-panel,
    .section-card,.learning-card,.topic-card,.post,.side-card,.right-card,.filters,
    .empty,.achievement,.compose-prompt,.path-link,.comment-content,.search-wrap,
    .search,.field,.form input,.form select,.form textarea,input,textarea,select,
    .goal,.reward,.summary .tile {
      background-color: ${palette.surface} !important;
      color: ${palette.text} !important;
      border-color: ${palette.border} !important;
      box-shadow: 0 4px 16px rgba(57, 75, 53, .055) !important;
    }
    input,textarea,select {
      color-scheme: light !important;
    }
    input::placeholder,textarea::placeholder {
      color: #778270 !important;
      opacity: 1 !important;
    }

    .hero,.quiz-hero,.banner,.welcome-card,.goal-card,.summary,.result-panel,
    .hero-card,.welcome-banner {
      background: ${palette.surfaceSoft} !important;
      background-image: none !important;
      color: ${palette.text} !important;
      border-color: ${palette.border} !important;
      box-shadow: 0 7px 22px rgba(57, 75, 53, .07) !important;
    }
    .hero h1,.hero h2,.hero h3,.hero p,.hero strong,.hero b,
    .quiz-hero h1,.quiz-hero p,.banner h1,.banner p,.welcome-card h1,.welcome-card p {
      color: ${palette.text} !important;
    }
    .hero h1 span,.brand span,.eyebrow,.section-title,.eyebrow span {
      color: ${palette.accentDark} !important;
      background: none !important;
      background-image: none !important;
      -webkit-text-fill-color: ${palette.accentDark} !important;
    }

    .progress,.progress-track,.goalbar,.bar-track {
      background: #D8E0D1 !important;
      border-color: ${palette.border} !important;
    }
    .bar,.progress-bar,.progress-fill,.goalbar i,.bar i {
      background: #78956E !important;
    }
    .xp,.heart,.mission-icon,.path-icon,.icon,.badge {
      background-color: ${palette.surfaceSoft} !important;
      color: ${palette.accentDark} !important;
      border-color: ${palette.border} !important;
    }

    button.primary,.primary-btn,.mission-btn,.community-cta,.search-btn,.submit-btn,
    .check-answer,button#next,#postBtn,.btn-primary,a.primary,.primary-link,
    button[type="submit"] {
      background: #6F8D69 !important;
      background-image: none !important;
      color: #FFFFFF !important;
      border-color: #5C7957 !important;
      box-shadow: 0 3px 9px rgba(61, 89, 57, .13) !important;
    }
    .option:hover:not(:disabled),button:focus-visible,a:focus-visible,
    input:focus-visible,textarea:focus-visible,select:focus-visible,
    .skillup-bottom-nav a:focus-visible {
      outline-color: #71916A !important;
      border-color: #71916A !important;
      box-shadow: 0 0 0 3px rgba(104, 139, 96, .17) !important;
    }
    .option.correct,.answer.correct,.correct {
      background: ${palette.successSoft} !important;
      border-color: #75A276 !important;
      color: #2B5233 !important;
    }
    .option.wrong,.answer.wrong,.wrong {
      background: ${palette.dangerSoft} !important;
      border-color: #CF8979 !important;
      color: #803C32 !important;
    }
    .feedback.good,.feedback.success,.correct-feedback {
      background: ${palette.successSoft} !important;
      color: #2B5233 !important;
      border-color: #B9D1B5 !important;
    }
    .feedback.bad,.feedback.error,.wrong-feedback {
      background: ${palette.dangerSoft} !important;
      color: #803C32 !important;
      border-color: #E7C3B8 !important;
    }

    .skillup-bottom-nav {
      background: rgba(250,249,240,.98) !important;
      border-color: ${palette.border} !important;
      box-shadow: 0 -6px 22px rgba(57,75,53,.09) !important;
    }
    .skillup-bottom-nav a {
      color: ${palette.muted} !important;
    }
    .skillup-bottom-nav a.active {
      background: ${palette.accentSoft} !important;
      color: ${palette.accentDark} !important;
    }
    ::selection {
      background: #DCE8D3 !important;
      color: ${palette.text} !important;
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *,*::before,*::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
    }
  `;

  const style = document.createElement('style');
  style.id = 'skillup-eye-shield-style';
  style.textContent = css;
  document.head.appendChild(style);
})();
