// temporary font tester: ?font=libron|schibsted|host|hanken (or ?font=default to reset)
(function () {
  var stacks = {
    libron: 'Libron, Georgia, serif',
    schibsted: '"Schibsted Grotesk", sans-serif',
    host: '"Host Grotesk", sans-serif',
    hanken: '"Hanken Grotesk", sans-serif'
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
