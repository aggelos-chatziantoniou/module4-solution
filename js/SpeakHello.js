(function(window) {
  var hello = {};
  var msg = "Hello ";
  hello.text = function(name) {
    console.log(msg + name);
  };
  window.hello = hello;
})(window);
