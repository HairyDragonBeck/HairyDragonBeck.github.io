//SWITCH
//var cmd = document.getElementById('inputText').value;
var cmd = document.forms['commandForm']['formInput'].value;
var mode = 'normal';
function submitCmd() {
    document.getElementById('commandText') = cmd;
    
}
