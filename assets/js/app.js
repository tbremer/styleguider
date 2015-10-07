(function() {
  window.addEventListener('message', function(event) {
    var element = document.getElementById(event.data.id);
    if (!element) { return false; }

    element.style.height = event.data.height + 'px';
  }, false)
})();
