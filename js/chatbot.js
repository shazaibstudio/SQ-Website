/*!
 * SQ Interactive — Site Assistant
 * ------------------------------------------------------------------
 * Drop-in widget: <script src="/js/chatbot.js"></script>
 *
 * PHILOSOPHY (do not violate when editing):
 *  - This is a lightweight navigation/qualification aid, not a
 *    standalone "AI product." It answers from SQ_KNOWLEDGE below —
 *    it never invents services, prices, or capabilities.
 *  - It is GUIDED first, conversational second: every bot message
 *    ends with tappable suggestion chips. Free typing is supported
 *    but never required.
 *  - It routes people to the right of the four worlds (Digital, AI,
 *    Immersive, Lab) instead of making them dig through pages.
 *  - It qualifies leads quietly in the background (world, project
 *    type, budget signal, urgency) and escalates to WhatsApp / Call
 *    / Contact form only when it has enough context to make that
 *    handoff useful — not on message 1.
 *  - It supports site navigation. It does not replace it. Every
 *    recommendation links to a real page on the site.
 *  - Single file. No dependencies. No build step. No external CSS.
 *  - Persists across pages via sessionStorage-backed state so the
 *    conversation doesn't reset every click.
 * ------------------------------------------------------------------
 */

(function () {
  'use strict';

  if (window.__sqChatbotInit) return; // guard against double-include
  window.__sqChatbotInit = true;

  var scriptEl = document.currentScript || (function () {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  /* ================================================================
     0. CONFIG — overridable via data-* attributes on the <script> tag
     ================================================================ */

  var CONFIG = {
    phoneDisplay: attr('data-phone-display', '+92 333 4151313'),
    phoneDial:    attr('data-phone-dial', '+923334151313'),
    whatsapp:     attr('data-whatsapp', '923334151313'),
    contactUrl:   attr('data-contact-url', '/contact/'),
    gaEventPrefix: attr('data-ga-prefix', 'sq_assistant'),
    storageKey:   'sq_assistant_session_v1',
    // score thresholds that decide which CTA strength to show
    scoreForHandoff: 35,   // show WhatsApp/Call suggestion
    scoreForUrgent: 60     // lead with Call, not just WhatsApp
  };

  function attr(name, fallback) {
    var v = scriptEl && scriptEl.getAttribute(name);
    return v || fallback;
  }

  /* ================================================================
     0.5 LANGUAGE INTEGRATION — reads window.SQ_LANGUAGE
     ================================================================ */

  var LANG = {
    current: 'en',
    translations: null,
    
    getCurrentLang: function() {
      if (window.SQ_LANGUAGE && window.SQ_LANGUAGE.current) {
        return window.SQ_LANGUAGE.current;
      }
      return 'en';
    },
    
    loadTranslations: function(callback) {
      var self = this;
      var url = '/lang/' + this.current + '/chatbot.json';
      
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          try {
            self.translations = JSON.parse(xhr.responseText);
            if (callback) callback();
          } catch (e) {
            console.warn('Chatbot JSON parse failed:', e);
            self.translations = null;
          }
        } else {
          console.warn('Chatbot translation load failed');
          self.translations = null;
        }
      };
      xhr.onerror = function() {
        console.warn('Chatbot fetch error');
        self.translations = null;
      };
      xhr.send();
    },
    
    init: function() {
      this.current = this.getCurrentLang();
      this.loadTranslations();
      
      var self = this;
      window.addEventListener('sq:languagechange', function(e) {
        self.current = e.detail.lang;
        self.loadTranslations(function() {
          self.updateUI();
        });
      });
    },
    
    get: function(path) {
      if (!this.translations) return null;
      var keys = path.split('.');
      var result = this.translations;
      for (var i = 0; i < keys.length; i++) {
        if (result && result[keys[i]]) {
          result = result[keys[i]];
        } else {
          return null;
        }
      }
      return result;
    },
    
    updateUI: function() {
      // Update toggle button label for current language
      if (els.toggle) {
        var label = els.toggle.querySelector('.sqa-toggle-label');
        if (label) {
          label.textContent = this.current === 'ur' ? 'پوچھیں' : 'Ask SQ';
        }
      }
      // Update header title
      var headerTitle = document.querySelector('.sqa-header-title b');
      if (headerTitle) {
        headerTitle.textContent = this.current === 'ur' ? 'SQ مددگار' : 'SQ Assistant';
      }
      // Update subtitle
      var subtitle = document.querySelector('.sqa-header-title span');
      if (subtitle) {
        var dotSpan = subtitle.querySelector('.sqa-dot');
        var dotHTML = dotSpan ? dotSpan.outerHTML : '';
        subtitle.innerHTML = dotHTML + (this.current === 'ur' ? ' عام طور پر منٹوں میں جواب' : ' Usually replies in minutes');
      }
      // Update input placeholder
      if (els.input) {
        els.input.placeholder = this.current === 'ur' ? 'سوال لکھیں…' : 'Type a question…';
      }
      // Update footnote
      var footnote = document.querySelector('.sqa-footnote');
      if (footnote) {
        footnote.textContent = this.current === 'ur' 
          ? 'SQ Interactive · ہماری اصل خدمات اور منصوبوں سے جوابات'
          : 'SQ Interactive · answers from our actual services & projects';
      }
    }
  };

  /* ================================================================
     1. KNOWLEDGE BASE — the only source of truth for what the bot says.
        Keep this in sync with the live site. Nothing outside this
        object should be presented as an SQ fact.
     ================================================================ */

  var KB = {
    company: {
      name: 'SQ Interactive',
      tagline: 'A Digital Technology Partner',
      location: 'Lahore, Pakistan',
      serviceArea: 'Pakistan, expanding into the GCC',
      founder: 'Shazaib'
    },

    worlds: {
      digital: {
        id: 'digital',
        label: 'Digital',
        number: '01',
        url: '/digital/',
        oneLiner: 'Websites, software, e-commerce, SEO and automation.',
        forWhom: 'businesses that need a stronger online presence, a store, or systems that remove manual work',
        services: [
          { name: 'Website Design & Development', hint: 'a new site or a redesign' },
          { name: 'Custom Software & Systems', hint: 'internal tools, databases, business systems' },
          { name: 'E-Commerce & Shopify', hint: 'selling products online' },
          { name: 'SEO & Digital Growth', hint: 'getting found on Google' },
          { name: 'Automation & Integration', hint: 'removing repetitive manual work' },
          { name: 'Hosting & Technical Support', hint: 'keeping an existing site running' }
        ],
        pricing: [
          { tier: 'Starter', price: 'PKR 75,000', note: 'small business website' },
          { tier: 'Standard', price: 'PKR 150,000', note: 'multi-page site or store' },
          { tier: 'Premium', price: 'PKR 200,000', note: 'larger builds, custom features' },
          { tier: 'Enterprise', price: 'PKR 300,000+', note: 'complex systems, integrations' },
          { tier: 'Ongoing Support', price: 'PKR 25,000 / month', note: 'hosting, maintenance, updates' }
        ]
      },
      ai: {
        id: 'ai',
        label: 'Artificial Intelligence',
        number: '02',
        url: '/ai/',
        oneLiner: 'AI visualization, design automation, and intelligent workflows.',
        forWhom: 'businesses that want faster design iteration or to automate decisions and workflows with AI',
        services: [
          { name: 'AI-Powered Visualization', hint: 'architecture / interior renders fast' },
          { name: 'AI Interior & Exterior Design', hint: 'style and material generation' },
          { name: 'Custom AI Workflows', hint: 'purpose-built pipelines for your business' },
          { name: 'AI Consulting & Strategy', hint: 'figuring out where AI actually helps you' },
          { name: 'Intelligent Automation', hint: 'document and decision automation' }
        ],
        pricing: [
          { tier: 'Project-based', price: 'PKR 100,000 – 500,000', note: 'scope-dependent' },
          { tier: 'Monthly Retainer', price: 'from PKR 30,000 / month', note: 'ongoing AI systems support' }
        ]
      },
      immersive: {
        id: 'immersive',
        label: 'Immersive Technology',
        number: '03',
        url: '/immersive/',
        oneLiner: '360° tours, VR walkthroughs, and interactive showcases.',
        forWhom: 'real estate, hospitality, and anyone who needs people to experience a space before visiting',
        services: [
          { name: '360° Virtual Tours', hint: 'walk-through of a property or venue' },
          { name: 'Virtual Reality Walkthroughs', hint: 'full VR headset experiences' },
          { name: 'Interactive Digital Experiences', hint: 'custom navigable 3D environments' },
          { name: 'VR Showrooms & Displays', hint: 'virtual product/property showrooms' },
          { name: 'Augmented Reality (AR)', hint: 'mobile AR product/space visualization' }
        ],
        pricing: [
          { tier: '360° Tours', price: 'PKR 30,000 – 75,000', note: 'per property/venue' },
          { tier: 'Interactive Walkthroughs', price: 'from PKR 95,000', note: 'guided interactive experience' },
          { tier: 'Full VR Experience', price: 'PKR 100,000 – 300,000', note: 'headset-ready builds' }
        ]
      },
      lab: {
        id: 'lab',
        label: 'Research & Innovation Lab',
        number: '04',
        url: '/lab/',
        oneLiner: 'Emerging tech, prototypes, and custom R&D.',
        forWhom: 'businesses exploring something new that does not fit a standard package yet',
        services: [
          { name: 'Emerging Technology Research', hint: 'evaluating new tech for your business' },
          { name: 'Prototype Development', hint: 'proof-of-concept builds' },
          { name: 'Innovation Consulting', hint: 'digital transformation roadmap' },
          { name: 'Custom R&D Projects', hint: 'long-term proprietary development' }
        ],
        pricing: [
          { tier: 'Custom scope', price: 'quoted after a short call', note: 'every Lab project is different' }
        ]
      }
    },

    // Real, verifiable proof points — used sparingly, only when relevant
    projects: [
      {
        client: 'Design Line Construction',
        world: 'digital',
        summary: 'Website plus AI visualization tooling for a construction company.',
        url: 'https://designlineconstruction.com/'
      },
      {
        client: 'Hotel Heaven',
        world: 'immersive',
        summary: '360° virtual tour integrated with booking; reported increase in bookings.',
        url: 'https://www.heavenhotel.com.pk/'
      }
    ],

    process: [
      'Discover — understand your business and the real problem',
      'Understand — find the root challenge, not just the request',
      'Strategize — recommend the right solution, even if it differs from what was asked',
      'Build — design, develop, test with transparency',
      'Deploy — launch and optimize',
      'Grow — long-term support and continuous improvement'
    ],

    whyChoose: [
      'One partner across web, AI, immersive and emerging tech — no juggling vendors',
      'Founder-led — direct oversight on strategy and quality',
      'We recommend the solution that fits the problem, not the one that is easiest to sell',
      'Real, verifiable projects — not stock case studies'
    ]
  };

  /* ================================================================
     2. STATE — persisted lightly across pages within a session
     ================================================================ */

  var State = {
    opened: false,
    everOpened: false,
    messages: [],       // {who:'bot'|'user', text, chips?}
    world: null,         // identified world id
    projectType: null,   // free text hint of what they want
    budgetSignal: false,
    urgencySignal: false,
    score: 0,
    stage: 'greeting',   // greeting -> exploring -> qualifying -> handoff
    handoffShown: false,

    load: function () {
      try {
        var raw = sessionStorage.getItem(CONFIG.storageKey);
        if (raw) {
          var saved = JSON.parse(raw);
          for (var k in saved) { this[k] = saved[k]; }
        }
      } catch (e) { /* ignore corrupt storage */ }
    },
    save: function () {
      try {
        sessionStorage.setItem(CONFIG.storageKey, JSON.stringify({
          opened: this.opened,
          everOpened: this.everOpened,
          messages: this.messages,
          world: this.world,
          projectType: this.projectType,
          budgetSignal: this.budgetSignal,
          urgencySignal: this.urgencySignal,
          score: this.score,
          stage: this.stage,
          handoffShown: this.handoffShown
        }));
      } catch (e) { /* storage full/unavailable — degrade silently */ }
    }
  };

  /* ================================================================
     3. ANALYTICS — guarded, never throws if GA absent
     ================================================================ */

  function track(event, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', CONFIG.gaEventPrefix + '_' + event, params || {});
      }
    } catch (e) { /* no-op */ }
  }

  /* ================================================================
     4. STYLES — injected once, scoped under #sq-assistant
     ================================================================ */

  var STYLE = '\
#sq-assistant{position:fixed;z-index:9998;right:20px;bottom:20px;font-family:\'Plus Jakarta Sans\',system-ui,-apple-system,sans-serif;}\
#sq-assistant *{box-sizing:border-box;}\
#sq-assistant .sqa-toggle{display:flex;align-items:center;gap:8px;background:linear-gradient(135deg,#D4AF37,#F1C40F);color:#0A0A0A;border:none;\
  border-radius:9999px;padding:12px 18px;font-weight:700;font-size:14px;cursor:pointer;box-shadow:0 6px 24px rgba(212,175,55,.35);\
  transition:transform .2s ease,box-shadow .2s ease;}\
#sq-assistant .sqa-toggle:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(212,175,55,.5);}\
#sq-assistant .sqa-toggle svg{flex-shrink:0;}\
#sq-assistant .sqa-dot{width:8px;height:8px;border-radius:50%;background:#1eb85a;box-shadow:0 0 0 3px rgba(30,184,90,.25);}\
#sq-assistant .sqa-window{position:fixed;right:20px;bottom:88px;width:360px;max-width:calc(100vw - 32px);height:min(560px,70vh);\
  background:#0D0D0D;border:1px solid rgba(255,255,255,.08);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.55);\
  display:none;flex-direction:column;overflow:hidden;}\
#sq-assistant .sqa-window.sqa-open{display:flex;animation:sqaSlideUp .25s ease;}\
@keyframes sqaSlideUp{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);}}\
#sq-assistant .sqa-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;\
  background:linear-gradient(135deg,rgba(212,175,55,.12),rgba(212,175,55,.02));border-bottom:1px solid rgba(255,255,255,.07);}\
#sq-assistant .sqa-header-title{display:flex;flex-direction:column;gap:2px;}\
#sq-assistant .sqa-header-title b{color:#fff;font-size:14px;font-weight:700;}\
#sq-assistant .sqa-header-title span{color:#A0A0A0;font-size:11px;display:flex;align-items:center;gap:5px;}\
#sq-assistant .sqa-close{background:none;border:none;color:#A0A0A0;cursor:pointer;padding:4px;line-height:0;}\
#sq-assistant .sqa-close:hover{color:#fff;}\
#sq-assistant .sqa-body{flex:1;overflow-y:auto;padding:14px 14px 6px;display:flex;flex-direction:column;gap:10px;}\
#sq-assistant .sqa-body::-webkit-scrollbar{width:5px;}\
#sq-assistant .sqa-body::-webkit-scrollbar-thumb{background:#2A2A2A;border-radius:9999px;}\
#sq-assistant .sqa-msg{max-width:86%;font-size:13.5px;line-height:1.5;padding:9px 12px;border-radius:12px;white-space:pre-wrap;}\
#sq-assistant .sqa-msg.bot{align-self:flex-start;background:#1A1A1A;color:#F5F5F5;border-bottom-left-radius:4px;}\
#sq-assistant .sqa-msg.user{align-self:flex-end;background:#D4AF37;color:#0A0A0A;font-weight:600;border-bottom-right-radius:4px;}\
#sq-assistant .sqa-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;}\
#sq-assistant .sqa-chip{background:transparent;border:1px solid rgba(212,175,55,.4);color:#D4AF37;font-size:12.5px;font-weight:600;\
  padding:7px 12px;border-radius:9999px;cursor:pointer;transition:background .15s ease,color .15s ease;}\
#sq-assistant .sqa-chip:hover{background:rgba(212,175,55,.12);}\
#sq-assistant .sqa-chip.sqa-cta{border-color:#25D366;color:#25D366;}\
#sq-assistant .sqa-chip.sqa-cta:hover{background:rgba(37,211,102,.12);}\
#sq-assistant .sqa-chip.sqa-cta-call{border-color:#D4AF37;color:#0A0A0A;background:#D4AF37;}\
#sq-assistant .sqa-chip.sqa-cta-call:hover{background:#F1C40F;}\
#sq-assistant .sqa-typing{align-self:flex-start;display:flex;gap:4px;padding:10px 12px;background:#1A1A1A;border-radius:12px;border-bottom-left-radius:4px;}\
#sq-assistant .sqa-typing span{width:6px;height:6px;background:#666;border-radius:50%;animation:sqaBounce 1.2s infinite ease-in-out;}\
#sq-assistant .sqa-typing span:nth-child(2){animation-delay:.15s;}\
#sq-assistant .sqa-typing span:nth-child(3){animation-delay:.3s;}\
@keyframes sqaBounce{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}\
#sq-assistant .sqa-inputrow{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(255,255,255,.07);background:#0A0A0A;}\
#sq-assistant .sqa-input{flex:1;background:#1A1A1A;border:1px solid rgba(255,255,255,.08);color:#F5F5F5;border-radius:9999px;\
  padding:9px 14px;font-size:13px;outline:none;}\
#sq-assistant .sqa-input:focus{border-color:rgba(212,175,55,.5);}\
#sq-assistant .sqa-send{background:#D4AF37;border:none;color:#0A0A0A;border-radius:50%;width:34px;height:34px;flex-shrink:0;\
  display:flex;align-items:center;justify-content:center;cursor:pointer;}\
#sq-assistant .sqa-send:hover{background:#F1C40F;}\
#sq-assistant .sqa-footnote{font-size:10px;color:#555;text-align:center;padding:6px 10px 10px;}\
@media (max-width:480px){\
  #sq-assistant{right:12px;bottom:12px;}\
  #sq-assistant .sqa-window{right:12px;left:12px;width:auto;bottom:80px;height:min(72vh,560px);}\
  #sq-assistant .sqa-toggle span.sqa-toggle-label{display:none;}\
}\
';

  function injectStyles() {
    var tag = document.createElement('style');
    tag.id = 'sq-assistant-styles';
    tag.appendChild(document.createTextNode(STYLE));
    document.head.appendChild(tag);
  }

  /* ================================================================
     5. DOM BUILD
     ================================================================ */

  var els = {};

  function buildWidget() {
    var root = document.createElement('div');
    root.id = 'sq-assistant';
    root.innerHTML =
      '<button class="sqa-toggle" id="sqa-toggle" aria-label="Open SQ assistant" aria-expanded="false">' +
        '<span class="sqa-dot"></span>' +
        '<span class="sqa-toggle-label">Ask SQ</span>' +
      '</button>' +
      '<div class="sqa-window" id="sqa-window" role="dialog" aria-label="SQ Interactive assistant">' +
        '<div class="sqa-header">' +
          '<div class="sqa-header-title">' +
            '<b>SQ Assistant</b>' +
            '<span><span class="sqa-dot" style="box-shadow:none;"></span> Usually replies in minutes</span>' +
          '</div>' +
          '<button class="sqa-close" id="sqa-close" aria-label="Close chat">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>' +
            '</svg>' +
          '</button>' +
        '</div>' +
        '<div class="sqa-body" id="sqa-body"></div>' +
        '<div class="sqa-inputrow">' +
          '<input class="sqa-input" id="sqa-input" type="text" placeholder="Type a question…" autocomplete="off" aria-label="Message">' +
          '<button class="sqa-send" id="sqa-send" aria-label="Send">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">' +
              '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>' +
            '</svg>' +
          '</button>' +
        '</div>' +
        '<div class="sqa-footnote">SQ Interactive · answers from our actual services & projects</div>' +
      '</div>';
    document.body.appendChild(root);

    els.toggle = document.getElementById('sqa-toggle');
    els.window = document.getElementById('sqa-window');
    els.close = document.getElementById('sqa-close');
    els.body = document.getElementById('sqa-body');
    els.input = document.getElementById('sqa-input');
    els.send = document.getElementById('sqa-send');

    els.toggle.addEventListener('click', toggleOpen);
    els.close.addEventListener('click', function () { setOpen(false); });
    els.send.addEventListener('click', handleSend);
    els.input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') handleSend();
    });
  }

  function toggleOpen() { setOpen(!State.opened); }

  function setOpen(open) {
    State.opened = open;
    els.window.classList.toggle('sqa-open', open);
    els.toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      if (!State.everOpened) {
        State.everOpened = true;
        track('opened_first_time');
        runGreeting();
      }
      track('opened');
      els.input.focus();
      scrollToBottom();
    }
    State.save();
  }

  function scrollToBottom() {
    requestAnimationFrame(function () {
      els.body.scrollTop = els.body.scrollHeight;
    });
  }

  /* ================================================================
     6. MESSAGE RENDERING
     ================================================================ */

  function renderAll() {
    els.body.innerHTML = '';
    State.messages.forEach(function (m) { renderMessage(m, false); });
    scrollToBottom();
  }

  function renderMessage(m, animate) {
    var div = document.createElement('div');
    div.className = 'sqa-msg ' + (m.who === 'user' ? 'user' : 'bot');
    div.textContent = m.text;
    els.body.appendChild(div);

    if (m.chips && m.chips.length) {
      var chipWrap = document.createElement('div');
      chipWrap.className = 'sqa-chips';
      m.chips.forEach(function (chip) {
        var btn = document.createElement('button');
        btn.className = 'sqa-chip' + (chip.cta ? ' sqa-cta' + (chip.cta === 'call' ? '-call' : '') : '');
        btn.textContent = chip.label;
        btn.addEventListener('click', function () { handleChip(chip); });
        chipWrap.appendChild(btn);
      });
      els.body.appendChild(chipWrap);
    }
    if (animate) scrollToBottom();
  }

  function addBotMessage(text, chips) {
    var m = { who: 'bot', text: text, chips: chips || [] };
    State.messages.push(m);
    renderMessage(m, true);
    State.save();
  }

  function addUserMessage(text) {
    var m = { who: 'user', text: text };
    State.messages.push(m);
    renderMessage(m, true);
    State.save();
  }

  function showTyping(callback, delay) {
    var typing = document.createElement('div');
    typing.className = 'sqa-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    els.body.appendChild(typing);
    scrollToBottom();
    setTimeout(function () {
      if (typing.parentNode) typing.parentNode.removeChild(typing);
      callback();
    }, delay || 550);
  }

  /* ================================================================
     7. CONVERSATION ENGINE
     ================================================================ */

  function runGreeting() {
    if (State.messages.length > 0) { renderAll(); return; } // resume, don't re-greet

    showTyping(function () {
      var isUrdu = LANG.current === 'ur';
      var greeting = isUrdu 
        ? 'السلام علیکم! میں SQ Interactive کا مددگار ہوں۔\n\nآپ کیا کرنے کی کوشش کر رہے ہیں؟'
        : 'Hi, I\'m the SQ Interactive assistant. I can point you to the right service, share pricing, or show real work we\'ve done.\n\nWhat are you trying to do?';
      
      var chips = isUrdu ? [
        { label: 'ویب سائٹ بنانا یا بہتر کرنا', action: 'route', world: 'digital' },
        { label: 'AI کے ساتھ خودکاری', action: 'route', world: 'ai' },
        { label: '3D یا VR میں جگہ دکھانا', action: 'route', world: 'immersive' },
        { label: 'کچھ نیا / یقین نہیں', action: 'unsure' }
      ] : [
        { label: 'Build or improve a website', action: 'route', world: 'digital' },
        { label: 'Automate something with AI', action: 'route', world: 'ai' },
        { label: 'Show a property/space in 3D or VR', action: 'route', world: 'immersive' },
        { label: 'Something new / not sure', action: 'unsure' }
      ];
      
      addBotMessage(greeting, chips);
    }, 400);
  }

  function handleChip(chip) {
    // echo the chip as a user message for conversational continuity
    addUserMessage(chip.label);

    switch (chip.action) {
      case 'route': routeToWorld(chip.world); break;
      case 'unsure': showUnsureFlow(); break;
      case 'services': showServices(chip.world); break;
      case 'pricing': showPricing(chip.world); break;
      case 'projects': showProjects(chip.world); break;
      case 'why': showWhyChoose(); break;
      case 'process': showProcess(); break;
      case 'lab': routeToWorld('lab'); break;
      case 'budget_yes': setBudgetSignal(true); break;
      case 'budget_no': setBudgetSignal(false); break;
      case 'urgent': setUrgency(true); break;
      case 'not_urgent': setUrgency(false); break;
      case 'goto_page': window.location.href = chip.url; break;
      case 'whatsapp': openWhatsApp(); break;
      case 'call': openCall(); break;
      case 'contact_form': openContactForm(); break;
      case 'more_worlds': showWorldMenu(); break;
      case 'restart': restartConversation(); break;
      default: break;
    }
  }

  function bump(points) {
    State.score += points;
    State.save();
  }

  function routeToWorld(worldId) {
    var world = KB.worlds[worldId];
    if (!world) return;
    State.world = worldId;
    State.stage = 'exploring';
    bump(10);
    track('world_identified', { world: worldId });

    showTyping(function () {
      addBotMessage(
        world.label + ' — ' + world.oneLiner + '\nThat\'s typically a fit for ' + world.forWhom + '.\n\nWhat would help most right now?',
        [
          { label: 'See services', action: 'services', world: worldId },
          { label: 'See pricing', action: 'pricing', world: worldId },
          { label: 'See real work', action: 'projects', world: worldId },
          { label: 'Visit the ' + world.label + ' page', action: 'goto_page', url: world.url }
        ]
      );
    });
  }

  function showServices(worldId) {
    var world = KB.worlds[worldId];
    
    // Build services list with fallback translations
    var lines;
    if (LANG.translations && LANG.translations.worlds && LANG.translations.worlds[worldId]) {
      var worldText = LANG.translations.worlds[worldId];
      lines = worldText.services.map(function (s) { return '• ' + s.name + ' — ' + s.hint; }).join('\n');
    } else {
      lines = world.services.map(function (s) { return '• ' + s.name + ' — ' + s.hint; }).join('\n');
    }
    
    bump(5);
    
    showTyping(function () {
      // Get translated response text with fallback
      var worldLabel = world.label;
      var responseText = world.label + ' services:';
      
      if (LANG.translations && LANG.translations.worlds && LANG.translations.worlds[worldId]) {
        worldLabel = LANG.translations.worlds[worldId].label || worldLabel;
        if (LANG.translations.responses && LANG.translations.responses.showServices) {
          responseText = LANG.translations.responses.showServices.replace('{label}', worldLabel);
        }
      }
      
      // Get chip labels with fallback
      var chips = [
        { label: (LANG.translations && LANG.translations.chips && LANG.translations.chips.whatCost) || 'What does that cost?', action: 'pricing', world: worldId },
        { label: (LANG.translations && LANG.translations.chips && LANG.translations.chips.showProof) || 'Show me proof', action: 'projects', world: worldId },
        { label: (LANG.translations && LANG.translations.chips && LANG.translations.chips.howWork) || 'How do you work?', action: 'process' },
        { label: (LANG.translations && LANG.translations.chips && LANG.translations.chips.talkToShazaib) || 'Talk to Shazaib', action: 'whatsapp', cta: 'wa' }
      ];
      
      addBotMessage(
        responseText + '\n' + lines,
        chips
      );
    });
  }

  function showPricing(worldId) {
    var world = KB.worlds[worldId];
    
    // Build pricing list: tier/price/note from KB (numeric data stays unchanged)
    var lines = world.pricing.map(function (p) { 
      return '• ' + p.tier + ' — ' + p.price + ' (' + p.note + ')'; 
    }).join('\n');
    
    bump(15);
    State.budgetSignal = true;
    
    showTyping(function () {
      // Get translated text with fallback
      var worldLabel = world.label;
      var responseText = world.label + ' pricing:';
      var pricingNote = 'Actual cost depends on scope — happy to get you an exact number.';
      
      if (LANG.translations && LANG.translations.worlds && LANG.translations.worlds[worldId]) {
        var worldText = LANG.translations.worlds[worldId];
        worldLabel = worldText.label || worldLabel;
        pricingNote = worldText.pricingNote || pricingNote;
        
        if (LANG.translations.responses && LANG.translations.responses.showPricing) {
          responseText = LANG.translations.responses.showPricing.replace('{label}', worldLabel);
        }
      }
      
      var fullMessage = responseText + '\n' + lines + '\n\n' + pricingNote;
      
      addBotMessage(
        fullMessage,
        buildHandoffChips(worldId)
      );
      maybeEscalate();
    });
  }

  function showProjects(worldId) {
    var relevant = KB.projects.filter(function (p) { return p.world === worldId; });
    if (!relevant.length) relevant = KB.projects; // fall back to any proof
    var lines = relevant.map(function (p) { return '• ' + p.client + ' — ' + p.summary; }).join('\n');
    bump(8);
    showTyping(function () {
      addBotMessage(
        'Real work in this area:\n' + lines,
        [
          { label: 'See pricing', action: 'pricing', world: worldId },
          { label: 'Why work with SQ?', action: 'why' },
          { label: 'Talk to Shazaib', action: 'whatsapp', cta: 'wa' }
        ]
      );
    });
  }

  function showWhyChoose() {
    var lines = KB.whyChoose.map(function (w) { return '• ' + w; }).join('\n');
    bump(3);
    showTyping(function () {
      addBotMessage(
        lines,
        [
          { label: 'How do you work?', action: 'process' },
          { label: 'Talk to Shazaib', action: 'whatsapp', cta: 'wa' },
          { label: 'Back to services', action: 'more_worlds' }
        ]
      );
    });
  }

  function showProcess() {
    var lines = KB.process.map(function (p, i) { return (i + 1) + '. ' + p; }).join('\n');
    bump(3);
    showTyping(function () {
      addBotMessage(
        'Here\'s how a project runs, start to finish:\n' + lines,
        [
          { label: 'What does it cost?', action: 'pricing', world: State.world || 'digital' },
          { label: 'Talk to Shazaib', action: 'whatsapp', cta: 'wa' }
        ]
      );
    });
  }

  function showUnsureFlow() {
    bump(2);
    showTyping(function () {
      addBotMessage(
        'No problem — quick way to narrow it down. Which sounds closest?',
        [
          { label: 'I need more customers / visibility', action: 'route', world: 'digital' },
          { label: 'My team wastes time on repetitive work', action: 'route', world: 'ai' },
          { label: 'People need to "see" a space before visiting', action: 'route', world: 'immersive' },
          { label: 'It\'s an experimental / new idea', action: 'lab' }
        ]
      );
    });
  }

  function showWorldMenu() {
    showTyping(function () {
      addBotMessage(
        'Which world?',
        Object.keys(KB.worlds).map(function (id) {
          var w = KB.worlds[id];
          return { label: w.number + ' — ' + w.label, action: 'route', world: id };
        })
      );
    });
  }

  function buildHandoffChips(worldId) {
    var chips = [
      { label: 'Get an exact quote', action: 'whatsapp', cta: 'wa' }
    ];
    if (worldId) chips.push({ label: 'See ' + KB.worlds[worldId].label + ' page', action: 'goto_page', url: KB.worlds[worldId].url });
    chips.push({ label: 'Not right now', action: 'more_worlds' });
    return chips;
  }

  function setBudgetSignal(v) {
    State.budgetSignal = v;
    bump(v ? 15 : 0);
    maybeEscalate();
  }
  function setUrgency(v) {
    State.urgencySignal = v;
    bump(v ? 20 : 0);
    maybeEscalate();
  }

  function restartConversation() {
    State.messages = [];
    State.world = null;
    State.stage = 'greeting';
    State.score = 0;
    State.save();
    els.body.innerHTML = '';
    runGreeting();
  }

  // Decide, after any high-value action, whether to actively surface
  // a WhatsApp/Call suggestion. Never on the very first message.
  function maybeEscalate() {
    if (State.handoffShown) return;
    if (State.messages.length < 2) return;

    if (State.score >= CONFIG.scoreForUrgent) {
      State.handoffShown = true;
      showTyping(function () {
        addBotMessage(
          'This sounds like something worth a quick, specific conversation. ' + KB.company.founder + ' can usually give you a real number faster than I can.',
          [
            { label: '📞 Call ' + KB.company.founder + ' now', action: 'call', cta: 'call' },
            { label: '💬 WhatsApp instead', action: 'whatsapp', cta: 'wa' }
          ]
        );
      }, 500);
    } else if (State.score >= CONFIG.scoreForHandoff) {
      State.handoffShown = true;
      showTyping(function () {
        addBotMessage(
          'Want me to connect you with ' + KB.company.founder + ' directly? Fastest way to get exact pricing for your project.',
          [
            { label: '💬 Chat on WhatsApp', action: 'whatsapp', cta: 'wa' },
            { label: 'Keep browsing here', action: 'more_worlds' }
          ]
        );
      }, 500);
    }
  }

  /* ================================================================
     8. FREE-TEXT INPUT — keyword-matched against the knowledge base.
        No hallucination: unmatched input gets an honest fallback
        that still offers a guided path forward.
     ================================================================ */

  var KEYWORDS = {
    digital: ['website', 'web', 'site', 'ecommerce', 'e-commerce', 'shopify', 'seo', 'software', 'app', 'automation', 'hosting'],
    ai: ['ai', 'artificial intelligence', 'automat', 'chatbot', 'render', 'visualization', 'interior design'],
    immersive: ['vr', 'virtual reality', '360', 'tour', 'walkthrough', 'immersive', 'ar', 'augmented reality', 'showroom'],
    lab: ['prototype', 'research', 'experiment', 'r&d', 'innovation', 'new tech', 'emerging']
  };
  var PRICE_WORDS = ['price', 'pricing', 'cost', 'budget', 'quote', 'how much', 'rate', 'fee'];
  var URGENT_WORDS = ['asap', 'urgent', 'immediately', 'this week', 'today', 'quick', 'soon as possible'];
  var CONTACT_WORDS = ['call', 'whatsapp', 'talk to someone', 'phone', 'contact', 'human', 'agent', 'speak to'];
  var PROOF_WORDS = ['example', 'portfolio', 'case study', 'proof', 'work you', 'clients', 'projects you'];
  var PROCESS_WORDS = ['how do you work', 'process', 'timeline', 'how long'];
  var GREETING_WORDS = ['hi', 'hello', 'hey', 'salam', 'assalam'];

  function detectWorld(text) {
    for (var w in KEYWORDS) {
      for (var i = 0; i < KEYWORDS[w].length; i++) {
        if (text.indexOf(KEYWORDS[w][i]) !== -1) return w;
      }
    }
    return null;
  }
  function containsAny(text, list) {
    for (var i = 0; i < list.length; i++) { if (text.indexOf(list[i]) !== -1) return true; }
    return false;
  }

  function handleSend() {
    var raw = els.input.value.trim();
    if (!raw) return;
    els.input.value = '';
    addUserMessage(raw);
    bump(4);

    var text = raw.toLowerCase();

    showTyping(function () { respondToFreeText(text); }, 500);
  }

  function respondToFreeText(text) {
    if (containsAny(text, CONTACT_WORDS)) {
      bump(20);
      addBotMessage(
        'Sure — easiest way is WhatsApp, usually a reply within minutes. Or call directly if you\'d rather talk it through.',
        [
          { label: '💬 WhatsApp', action: 'whatsapp', cta: 'wa' },
          { label: '📞 Call', action: 'call', cta: 'call' }
        ]
      );
      return;
    }

    if (containsAny(text, URGENT_WORDS)) {
      setUrgency(true);
    }

    if (containsAny(text, PRICE_WORDS)) {
      var w = State.world || detectWorld(text) || 'digital';
      showPricing(w);
      return;
    }

    if (containsAny(text, PROOF_WORDS)) {
      showProjects(State.world);
      return;
    }

    if (containsAny(text, PROCESS_WORDS)) {
      showProcess();
      return;
    }

    if (containsAny(text, GREETING_WORDS) && State.messages.length <= 2) {
      addBotMessage('Hey! What are you looking to do — build something, automate something, or showcase something?', [
        { label: 'Build or improve a website', action: 'route', world: 'digital' },
        { label: 'Automate with AI', action: 'route', world: 'ai' },
        { label: 'Showcase in 3D/VR', action: 'route', world: 'immersive' }
      ]);
      return;
    }

    var detected = detectWorld(text);
    if (detected) {
      routeToWorld(detected);
      return;
    }

    // Honest fallback — no hallucinated capability, just a guided path
    maybeEscalate();
    if (!State.handoffShown) {
      addBotMessage(
        'I want to point you to the right place rather than guess — which of these is closest to what you need?',
        [
          { label: '01 — Digital', action: 'route', world: 'digital' },
          { label: '02 — AI', action: 'route', world: 'ai' },
          { label: '03 — Immersive', action: 'route', world: 'immersive' },
          { label: '04 — Lab', action: 'route', world: 'lab' },
          { label: 'Just let me talk to someone', action: 'whatsapp', cta: 'wa' }
        ]
      );
    }
  }

  /* ================================================================
     9. CONVERSION ACTIONS
     ================================================================ */

  function buildWhatsAppMessage() {
    var parts = ['Hi SQ Interactive,'];
    if (State.world && KB.worlds[State.world]) {
      parts.push('I\'m interested in ' + KB.worlds[State.world].label + ' services.');
    } else {
      parts.push('I\'m exploring what you offer.');
    }
    if (State.urgencySignal) parts.push('This is fairly time-sensitive for me.');
    parts.push('Can we discuss?');
    return parts.join(' ');
  }

  function openWhatsApp() {
    track('whatsapp_click', { world: State.world, score: State.score });
    var msg = encodeURIComponent(buildWhatsAppMessage());
    window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + msg, '_blank', 'noopener');
  }

  function openCall() {
    track('call_click', { world: State.world, score: State.score });
    window.location.href = 'tel:' + CONFIG.phoneDial;
  }

  function openContactForm() {
    track('contact_form_click', { world: State.world, score: State.score });
    window.location.href = CONFIG.contactUrl;
  }

  /* ================================================================
     10. INIT
     ================================================================ */

  function init() {
    State.load();
    LANG.init(); // Initialize language support
    injectStyles();
    buildWidget();

    if (State.everOpened) {
      // resume prior conversation silently, keep window closed until clicked
      renderAll();
    }
    if (State.opened) {
      setOpen(true);
    }

    track('widget_loaded', { page: window.location.pathname });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
