/**
 * MaSIC 共通フッター描画スクリプト
 *
 * 使い方:
 *   ルート直下のページ        : <script src="footer.js"></script>
 *   1階層下のサブディレクトリ : <script src="../footer.js"></script>
 *   2階層下のサブディレクトリ : <script src="../../footer.js"></script>
 *
 * 各ページに <div id="site-footer"></div> プレースホルダを置いておくと、
 * このスクリプトがフッター HTML を innerHTML で描画する。
 * CSS クラス (.footer / .footer-logo / .footer-links) は各ページ側で定義済みであること。
 */
(function () {
  // サブディレクトリ判定: パス名の階層に応じて prefix（ルートまでの相対パス）を決める。
  // 新しいサブディレクトリを増やしたら、階層の深さに応じて条件を追加すること。
  var path = window.location.pathname;
  var prefix = '';
  if (/\/events\/toyamath\/\d{4}(?:\/|$)/.test(path)) {
    prefix = '../../../';
  } else if (path.indexOf('/events/toyamath/') !== -1) {
    prefix = '../../';
  } else if (path.indexOf('/ai-education-workshop/') !== -1) {
    // 例: /ai-education-workshop/1/ のような 2 階層下のページ
    prefix = '../../';
  } else if (
    path.indexOf('/koukoku/') !== -1 ||
    path.indexOf('/formalisation/') !== -1 ||
    path.indexOf('/events/') !== -1 ||
    path.indexOf('/services/') !== -1
  ) {
    // 例: /koukoku/ のような 1 階層下のページ
    prefix = '../';
  }

  var el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML =
    '<footer class="footer">\n' +
    '  <img src="' + prefix + 'logo-full.png" alt="MaSIC" class="footer-logo">\n' +
    '  <div class="footer-organization">\n' +
    '    <p class="footer-organization-name">一般社団法人 数理社会実装教育研究センター</p>\n' +
    '    <p class="footer-organization-details">\n' +
    '      <span class="footer-organization-registration">法人番号 8011105011832</span>\n' +
    '      <span class="footer-organization-address">〒169-0075 東京都新宿区高田馬場１丁目</span>\n' +
    '      <a class="footer-organization-email" href="mailto:info@masic.jp">info@masic.jp</a>\n' +
    '    </p>\n' +
    '  </div>\n' +
    '  <p class="footer-links">\n' +
    '    <a href="' + prefix + 'houjin.html">法人情報</a>\n' +
    '    <span aria-hidden="true"> · </span>\n' +
    '    <a href="' + prefix + 'koukoku/index.html">電子公告</a>\n' +
    '    <span aria-hidden="true"> · </span>\n' +
    '    <a href="' + prefix + 'tokushoho.html">特定商取引法に基づく表記</a>\n' +
    '  </p>\n' +
    '  <p>&copy; 2026 Mathematics for Social Implementation Center. All rights reserved.</p>\n' +
    '</footer>';
})();
