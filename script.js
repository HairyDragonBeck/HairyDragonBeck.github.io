//SWITCH
//var cmd = document.getElementById('inputText').value;
var inputTextVar = document.getElementById('inputText');
var test = document.getElementById('TEMP');
function submitName() {
    var inputText  = inputTextVar.value;
    document.body.innerHTML.replace(test, inputText);
}
  
