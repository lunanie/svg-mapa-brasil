(function() {
  var states = document.getElementsByClassName("estado");

  for (var i = 0; i < states.length; i++) {
    states[i].onclick = function() {
      alert(this.getAttribute("name") + " " + this.getAttribute("code"));
    };
  }
})();
