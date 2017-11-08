//SWITCH
//var cmd = document.getElementById('inputText').value;
var inputTextVar = document.getElementById('inputText');
function submitCommand() {
    var inputText  = inputTextVar.value;
    var formInput = document.getElementsByName('formInput').value;
    if (formInput == 'SpinTheBottle') {
        window.open('https://hairydragonbeck.github.io/SpinTheBottle/spinthebottle.html', '_self');
        }
    
}
  
