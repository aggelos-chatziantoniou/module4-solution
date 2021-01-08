(function(window) {
  var goodbye = {};
  var msg = "Goodbye ";
  goodbye.text = function(name) {
    console.log(msg + name);
  };
  window.goodbye = goodbye;
})(window);
