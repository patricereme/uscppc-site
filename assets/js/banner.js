(function () {
  var b = document.querySelector('.call-banner');
  if (!b) return;
  try { if (sessionStorage.getItem('callBannerClosed') === '1') { b.hidden = true; return; } } catch (e) {}
  var c = b.querySelector('.call-banner-close');
  if (c) c.addEventListener('click', function () {
    b.hidden = true;
    try { sessionStorage.setItem('callBannerClosed', '1'); } catch (e) {}
  });
})();