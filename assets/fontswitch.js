// temporary font tester: ?font=host|onest|satoshi|generalsans (or ?font=default to reset)
// optional: ?weight=500 overrides the body weight (?weight=default to reset)
(function () {
  var fonts = {
    host: { stack: '"Host Grotesk", sans-serif', weight: 400 },
    onest: { stack: 'Onest, sans-serif', weight: 400 },
    satoshi: { stack: 'Satoshi, sans-serif', weight: 500 },
    generalsans: { stack: '"General Sans", sans-serif', weight: 500 }
  };
  var choice = null, weight = null;
  try {
    var q = new URLSearchParams(location.search);
    var f = q.get('font'), w = q.get('weight');
    if (f === 'default') localStorage.removeItem('font');
    else if (f && fonts[f]) localStorage.setItem('font', f);
    if (w === 'default') localStorage.removeItem('weight');
    else if (w && +w >= 100 && +w <= 900) localStorage.setItem('weight', +w);
    choice = localStorage.getItem('font');
    weight = localStorage.getItem('weight');
  } catch (e) {}
  var root = document.documentElement.style;
  if (choice && fonts[choice]) {
    root.setProperty('--font', fonts[choice].stack);
    root.setProperty('--weight', weight || fonts[choice].weight);
  } else if (weight) {
    root.setProperty('--weight', weight);
  }
})();
