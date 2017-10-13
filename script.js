//SWITCH
//var cmd = document.getElementById('inputText').value;

var mode = 'normal';
function submitCmd() {
    var cmd = document.forms['commandForm']['formInput'].value;
    if (cmd == "") {
        alert('' + cmd + ' is not a command!');
        return false;
        }
    document.getElementById('commandText').innerHTML = cmd;
    
}
function submitButton() {
 document.getElementById('inputForm').submit();   
}
