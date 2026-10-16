// temporary font tester: ?font=host|onest|satoshi|generalsans (or ?font=default to reset)
(function () {
  var stacks = {
    host: '"Host Grotesk", sans-serif',
    onest: 'Onest, sans-serif',
    satoshi: 'Satoshi, sans-serif',
    generalsans: '"General Sans", sans-serif'
  };
  var choice = null;
  try {
    var param = new URLSearchParams(location.search).get('font');
    if (param === 'default') localStorage.removeItem('font');
    else if (param && stacks[param]) localStorage.setItem('font', param);
    choice = localStorage.getItem('font');
  } catch (e) {}
  if (choice && stacks[choice]) document.documentElement.style.setProperty('--font', stacks[choice]);
})();
