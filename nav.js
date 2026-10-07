/**
 * MaSIC 共通ナビ描画スクリプト
 *
 * 使い方は footer.js と同じ。各ページに <div id="site-nav"></div> を置く。
 */
(function () {
  var path = window.location.pathname;
  var prefix = '';
  if (/\/events\/toyamath\/\d{4}(?:\/|$)/.test(path)) {
    prefix = '../../../';
  } else if (path.indexOf('/events/toyamath/') !== -1) {
    prefix = '../../';
  } else if (path.indexOf('/ai-education-workshop/') !== -1) {
    prefix = '../../';
  } else if (
    path.indexOf('/koukoku/') !== -1 ||
    path.indexOf('/formalisation/') !== -1 ||
    path.indexOf('/events/') !== -1 ||
    path.indexOf('/services/') !== -1
  ) {
    prefix = '../';
  }

  var current = '';
  if (path.indexOf('/events/') !== -1 || path.indexOf('/ai-education-workshop/') !== -1) {
    current = 'events';
  }

  function linkClass(name) {
    return 'nav-link' + (current === name ? ' is-current' : '');
  }

  var eventsPanelId = 'nav-events-panel';

  var el = document.getElementById('site-nav');
  if (!el) return;

  var homeUrl = el.getAttribute('data-home-url') || prefix + 'index.html';

  el.innerHTML =
    '<style>\n' +
    '  .nav-brand-text { display:flex; flex-direction:column; gap:2px; } .nav-organization-name { font-size:11px; font-weight:400; line-height:1.35; letter-spacing:0; } @media(max-width:640px) { .nav-organization-name { font-size:9px; max-width:13em; } .nav-brand { gap:6px; } }\n' +
    '  .nav-disclosure-nav .nav-disclosure { position: relative; }\n' +
    '  .nav-disclosure-nav .nav-disclosure-button {\n' +
    '    appearance: none; -webkit-appearance: none; border: 0; margin: 0; padding: 0;\n' +
    '    background: transparent; cursor: pointer; min-height: 44px;\n' +
    '  }\n' +
    '  .nav-disclosure-nav .nav-disclosure-button::after {\n' +
    '    content: ""; display: inline-block; width: 0.42em; height: 0.42em;\n' +
    '    margin: 0 0 0.18em 0.45em; border-right: 1px solid currentColor;\n' +
    '    border-bottom: 1px solid currentColor; transform: rotate(45deg);\n' +
    '    transition: transform 0.2s ease;\n' +
    '  }\n' +
    '  .nav-disclosure-nav .nav-disclosure-button[aria-expanded="true"]::after {\n' +
    '    margin-bottom: -0.08em; transform: rotate(225deg);\n' +
    '  }\n' +
    '  .nav-disclosure-nav .nav-disclosure-panel {\n' +
    '    position: absolute; top: calc(100% + 0.85rem); right: 0; z-index: 1;\n' +
    '    width: min(22rem, 70vw); padding: 0.45rem; margin: 0;\n' +
    '    background: #fff; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 12px;\n' +
    '    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n' +
    '  }\n' +
    '  .nav-disclosure-nav .nav-disclosure-list { list-style: none; padding: 0; margin: 0; }\n' +
    '  .nav-disclosure-nav .nav-disclosure-list li + li { border-top: 1px solid rgba(0, 0, 0, 0.08); }\n' +
    '  .nav-disclosure-nav .nav-disclosure-list a,\n' +
    '  .nav-disclosure-nav .nav-disclosure-list .nav-disclosure-note {\n' +
    '    display: block; padding: 0.7rem 0.85rem; color: inherit;\n' +
    '    font-family: inherit; font-size: 0.86rem; line-height: 1.5;\n' +
    '    text-decoration: none;\n' +
    '  }\n' +
    '  .nav-disclosure-nav .nav-disclosure-list a:hover,\n' +
    '  .nav-disclosure-nav .nav-disclosure-list a:focus-visible { color: var(--c-primary); }\n' +
    '  .nav-disclosure-nav .nav-disclosure-list a small { display: block; margin-top: 6px; color: #64748b; }\n' +
    '  .nav-disclosure-nav .nav-disclosure-button:focus-visible { outline: 2px solid #0284c7; outline-offset: 3px; border-radius: 4px; }\n' +
    '  .nav-disclosure-nav .nav-disclosure-note strong { display: block; font-weight: 600; }\n' +
    '  .nav-disclosure-nav .nav-disclosure-note small { display: block; margin-top: 0.2rem; opacity: 0.7; }\n' +
    '  @media (max-width: 640px) {\n' +
    '    .nav-disclosure-nav .nav-disclosure-panel {\n' +
    '      position: fixed; top: 80px; left: 4%; right: 4%; width: auto;\n' +
    '      max-height: calc(100dvh - 80px - 1rem); overflow: auto;\n' +
    '    }\n' +
    '  }\n' +
    '</style>\n' +
    '<nav class="nav nav-disclosure-nav">\n' +
    '  <a href="' + homeUrl + '" class="nav-brand">\n' +
    '    <img src="' + prefix + 'logo-icon.png" alt="MaSIC Logo" class="nav-logo">\n' +
    '    <span class="nav-brand-text"><span class="nav-title">MaSIC</span><span class="nav-organization-name">一般社団法人<br>数理社会実装教育研究センター</span></span>\n' +
    '  </a>\n' +
    '  <div class="nav-links">\n' +
    '    <div class="nav-disclosure">\n' +
    '      <button type="button" class="' + linkClass('events') + ' nav-disclosure-button" aria-expanded="false" aria-controls="' + eventsPanelId + '">イベント</button>\n' +
    '      <div id="' + eventsPanelId + '" class="nav-disclosure-panel" hidden>\n' +
    '        <ul class="nav-disclosure-list">\n' +
    '          <li><a href="' + prefix + 'ai-education-workshop/1/">第1回 MaSIC AI Education Workshop <small>2026.12.23｜オンライン・無料</small></a></li>\n' +
    '          <li><a href="' + prefix + 'events/toyamath/2027/">富山数理ワークショップ 2027 <small>2027.3.18–19｜富山大学</small></a></li>\n' +
    '          <li><a href="' + prefix + 'events/">イベント一覧</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <a href="mailto:info@masic.jp" class="nav-contact">お問い合わせ</a>\n' +
    '  </div>\n' +
    '</nav>';

  var nav = el.querySelector('.nav-disclosure-nav');
  var buttons = nav.querySelectorAll('.nav-disclosure-button');

  function closeAll(returnFocus) {
    buttons.forEach(function (button) {
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    });
    if (returnFocus) returnFocus.focus();
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var wasOpen = button.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!wasOpen) {
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });

  nav.addEventListener('focusout', function (event) {
    if (!nav.contains(event.relatedTarget)) closeAll();
  });
  document.addEventListener('pointerdown', function (event) {
    if (!nav.contains(event.target)) closeAll();
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      var openButton = nav.querySelector('.nav-disclosure-button[aria-expanded="true"]');
      if (openButton) {
        event.preventDefault();
        closeAll(openButton);
      }
    }
  });
})();
