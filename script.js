//SWITCH
//var cmd = document.getElementById('inputText').value;

var mode = 'normal';
window.onkeyup = keyup;
var inputTextValue;
function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    window.location = "https://HairyDragonBeck.github.io/" + inputTextValue;
  }
}
  
