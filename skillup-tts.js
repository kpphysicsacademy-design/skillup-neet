/* SkillUp text-to-speech helper. No Firebase or API key required. */
(function () {
  'use strict';

  if (window.SkillUpTTS) return;

  const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  let currentUtterance = null;
  let voices = [];
  let selectedVoice = null;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    selectedVoice =
      voices.find(v => /^en-IN$/i.test(v.lang) && /female|india|heera|rishi/i.test(v.name)) ||
      voices.find(v => /^en-IN$/i.test(v.lang)) ||
      voices.find(v => /^en-GB$/i.test(v.lang)) ||
      voices.find(v => /^en-US$/i.test(v.lang)) ||
      null;
  }

  function getText() {
    const selected = window.getSelection && String(window.getSelection()).trim();
    if (selected) return selected;

    const question = document.querySelector('#question, [data-tts="question"]');
    const options = document.querySelector('#options, [data-tts="options"]');
    const feedback = document.querySelector('#feedback, .feedback.show, [data-tts="explanation"]');

    if (question) {
      const parts = [question.innerText || question.textContent];
      if (options) {
        const optionTexts = Array.from(options.querySelectorAll('button, li, label, .option'))
          .map(el => (el.innerText || el.textContent || '').trim())
          .filter(Boolean);
        if (optionTexts.length) parts.push('Answer choices: ' + optionTexts.join('. '));
      }
      if (feedback && (feedback.innerText || feedback.textContent).trim()) {
        parts.push('Explanation: ' + (feedback.innerText || feedback.textContent).trim());
      }
      return parts.join('. ');
    }

    const main = document.querySelector('main, article, [data-tts="content"]') || document.body;
    const clone = main.cloneNode(true);
    clone.querySelectorAll('button, nav, header, footer, script, style, select, input, textarea, [aria-hidden="true"], [data-tts="ignore"]').forEach(el => el.remove());
    return (clone.innerText || clone.textContent || '').replace(/\\s+/g, ' ').trim();
  }

  function setStatus(message) {
    const status = document.getElementById('skillup-tts-status');
    if (status) status.textContent = message;
  }

  function stop() {
    if (synth) synth.cancel();
    currentUtterance = null;
    setStatus('Audio stopped');
    const play = document.getElementById('skillup-tts-play');
    if (play) play.textContent = '🔊 Listen';
  }

  function speak() {
    if (!synth) {
      setStatus('Text-to-speech is not supported in this browser.');
      return;
    }
    const text = getText();
    if (!text) {
      setStatus('No text found to read on this page.');
      return;
    }
    synth.cancel();
    loadVoices();
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-IN';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;
    if (selectedVoice) currentUtterance.voice = selectedVoice;
    currentUtterance.onstart = () => {
      setStatus('Reading aloud…');
      const play = document.getElementById('skillup-tts-play');
      if (play) play.textContent = '▶ Playing';
    };
    currentUtterance.onend = () => {
      setStatus('Finished reading');
      const play = document.getElementById('skillup-tts-play');
      if (play) play.textContent = '🔊 Listen';
    };
    currentUtterance.onerror = () => {
      setStatus('Could not play audio. Check the device voice settings.');
      const play = document.getElementById('skillup-tts-play');
      if (play) play.textContent = '🔊 Listen';
    };
    synth.speak(currentUtterance);
  }

  function addControls() {
    if (document.getElementById('skillup-tts-panel')) return;
    const style = document.createElement('style');
    style.textContent = `
      #skillup-tts-panel{position:fixed;right:14px;bottom:14px;z-index:9999;display:flex;align-items:center;gap:8px;flex-wrap:wrap;max-width:calc(100vw - 28px);padding:9px 11px;background:#fff;border:1px solid #dbe4f0;border-radius:16px;box-shadow:0 6px 24px rgba(20,45,80,.16);font:700 13px system-ui,-apple-system,"Segoe UI",sans-serif;color:#17365c}
      #skillup-tts-panel button{border:0;border-radius:10px;padding:10px 12px;min-height:40px;background:#1cb0f6;color:#fff;font:800 13px system-ui,-apple-system,"Segoe UI",sans-serif;cursor:pointer}
      #skillup-tts-panel #skillup-tts-stop{background:#edf3fb;color:#17365c}
      #skillup-tts-status{font-size:11px;font-weight:600;color:#64748b;max-width:180px}
      @media(max-width:480px){#skillup-tts-panel{right:8px;bottom:8px;gap:6px;padding:7px}#skillup-tts-panel button{padding:9px 10px}#skillup-tts-status{max-width:125px}}
      @media(prefers-reduced-motion:reduce){#skillup-tts-panel *{transition:none!important}}
    `;
    document.head.appendChild(style);
    const panel = document.createElement('div');
    panel.id = 'skillup-tts-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Text to speech controls');
    panel.innerHTML = '<button type="button" id="skillup-tts-play">🔊 Listen</button><button type="button" id="skillup-tts-stop">■ Stop</button><span id="skillup-tts-status" aria-live="polite">English (India)</span>';
    document.body.appendChild(panel);
    document.getElementById('skillup-tts-play').addEventListener('click', speak);
    document.getElementById('skillup-tts-stop').addEventListener('click', stop);
  }

  window.SkillUpTTS = { speak, stop, getText };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addControls);
  } else {
    addControls();
  }
  loadVoices();
  if (synth && synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;
})();
