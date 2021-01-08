(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().startsWith("j")) {
      goodbye.text(names[i]);
    } else {
      hello.text(names[i]);
    }
  }
})(window);
