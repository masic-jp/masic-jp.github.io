/**
 * MaSIC 共通フッター描画スクリプト
 *
 * 使い方:
 *   ルート直下のページ  : <script src="footer.js"></script>
 *   サブディレクトリ内  : <script src="../footer.js"></script>
 *
 * 各ページに <div id="site-footer"></div> プレースホルダを置いておくと、
 * このスクリプトがフッター HTML を innerHTML で描画する。
 * CSS クラス (.footer / .footer-logo / .footer-links) は各ページ側で定義済みであること。
 */
(function () {
  // サブディレクトリ判定: パス名に /koukoku/ を含む場合は prefix を ../ にする。
  // サブディレクトリが増えたらここを調整（例: '/about/' など新規ディレクトリを条件に追加）。
  var path = window.location.pathname;
  var prefix = path.indexOf('/koukoku/') !== -1 ? '../' : '';

  var el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML =
    '<footer class="footer">\n' +
    '  <img src="' + prefix + 'logo-full.png" alt="MaSIC" class="footer-logo">\n' +
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
