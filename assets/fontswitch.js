// temporary font tester: floating panel (bottom-left) to pick font and body weight.
// the choice is per tab (sessionStorage + URL), so you can compare fonts in separate tabs.
// URL params still work: ?font=host|onest|satoshi|generalsans  ?weight=500  (or =default)
(function () {
  var fonts = {
    host: { name: 'Host Grotesk', stack: '"Host Grotesk", sans-serif', weight: 400 },
    onest: { name: 'Onest', stack: 'Onest, sans-serif', weight: 400 },
    satoshi: { name: 'Satoshi', stack: 'Satoshi, sans-serif', weight: 500 },
    generalsans: { name: 'General Sans', stack: '"General Sans", sans-serif', weight: 500 }
  };
  var state = { font: 'host', weight: null };

  function get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { v === null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) {} }

  var q = new URLSearchParams(location.search);
  var f = q.get('font'), w = q.get('weight');
  if (f === 'default') set('font', null); else if (f && fonts[f]) set('font', f);
  if (w === 'default') set('weight', null); else if (w && +w >= 100 && +w <= 900) set('weight', +w);
  if (fonts[get('font')]) state.font = get('font');
  if (get('weight')) state.weight = +get('weight');

  var root = document.documentElement.style;
  function apply() {
    root.setProperty('--font', fonts[state.font].stack);
    root.setProperty('--weight', state.weight || fonts[state.font].weight);
    // keep the choice in the URL too, so a reload or duplicated tab keeps it
    try {
      var u = new URL(location.href);
      u.searchParams.set('font', state.font);
      state.weight ? u.searchParams.set('weight', state.weight) : u.searchParams.delete('weight');
      history.replaceState(null, '', u);
    } catch (e) {}
  }
  apply();

  document.addEventListener('DOMContentLoaded', function () {
    var box = document.createElement('div');
    box.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:9999;padding:8px 10px;' +
      'background:rgba(0,0,0,.8);color:#fff;font:12px/1.4 system-ui,sans-serif;border-radius:6px;' +
      'display:flex;gap:8px;align-items:center';
    var sel = document.createElement('select');
    Object.keys(fonts).forEach(function (k) {
      var o = document.createElement('option'); o.value = k; o.textContent = fonts[k].name; sel.appendChild(o);
    });
    var range = document.createElement('input');
    range.type = 'range'; range.min = 200; range.max = 800; range.step = 50;
    var label = document.createElement('span'); label.style.minWidth = '24px';
    var reset = document.createElement('button'); reset.textContent = 'reset weight';

    function sync() {
      sel.value = state.font;
      var wt = state.weight || fonts[state.font].weight;
      range.value = wt; label.textContent = wt;
    }
    sel.onchange = function () { state.font = sel.value; set('font', state.font); apply(); sync(); };
    range.oninput = function () { state.weight = +range.value; set('weight', state.weight); apply(); sync(); };
    reset.onclick = function () { state.weight = null; set('weight', null); apply(); sync(); };

    box.append(sel, range, label, reset);
    document.body.appendChild(box);
    sync();
  });
})();
