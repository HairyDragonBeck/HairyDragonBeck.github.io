//SWITCH
//var cmd = document.getElementById('inputText').value;
var inputTextVar = document.getElementById('inputText');
function submitCommand(valued) {
    var inputText  = inputTextVar.value;
    var formInput = document.getElementsByName('formInput').value;
    if (valued == 'SpinTheBottle') {
       // window.open('https://hairydragonbeck.github.io/SpinTheBottle/spinthebottle.html', '_blank');
        alert(valued);
        }
    
}
  
var location = {"SpinTheBottle":"/SpinTheBottle/spinthebottle.html"};
