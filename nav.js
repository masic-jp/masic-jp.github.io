/**
 * MaSIC 共通ナビ描画スクリプト
 *
 * 使い方は footer.js と同じ。各ページに <div id="site-nav"></div> を置く。
 */
(function () {
  var path = window.location.pathname;
  var prefix = '';
  if (path.indexOf('/ai-education-workshop/') !== -1) {
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
  } else if (path.indexOf('/services/') !== -1) {
    current = 'services';
  }

  function linkClass(name) {
    return 'nav-link' + (current === name ? ' is-current' : '');
  }

  var el = document.getElementById('site-nav');
  if (!el) return;

  el.innerHTML =
    '<nav class="nav">\n' +
    '  <a href="' + prefix + 'index.html" class="nav-brand">\n' +
    '    <img src="' + prefix + 'logo-icon.png" alt="MaSIC Logo" class="nav-logo">\n' +
    '    <span class="nav-title">MaSIC</span>\n' +
    '  </a>\n' +
    '  <div class="nav-links">\n' +
    '    <a href="' + prefix + 'events/" class="' + linkClass('events') + '">イベント</a>\n' +
    '    <a href="' + prefix + 'services/" class="' + linkClass('services') + '">サービス</a>\n' +
    '    <a href="mailto:info@masic.jp" class="nav-contact">お問い合わせ</a>\n' +
    '  </div>\n' +
    '</nav>';
})();
