function move(event) {
  var x = event.clientX;
  var y = event.clientY;

  var dom = document.getElementById("overlaybody");
  dom.style.background= "radial-gradient(transparent, red);"
  console.log(dom.style.background);
  //background:radial-gradient(transparent, #f9f8fa);
}
