//SWITCH
//var cmd = document.getElementById('inputText').value;

var mode = 'normal';
function submitCmd() {

window.onkeyup = keyup;
var inputTextValue;
function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    window.location = "https://HairyDragonBeck.github.io/" + inputTextValue;
  }
}
    if(cmd == 'time') {
        var date = new Date();
        var dateMin = date.getMinutes();
    }
}
function submitButton() {
 document.getElementById('inputForm').submit();   
}
