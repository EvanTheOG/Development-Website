function onEnable() {
  console.log("onEnable fired!");
  setTimeout(function() {
    var element = document.getElementsByClassName('arrow');
    element.style.display = "block";
    console.log("displayed!");
  },1000);
}
