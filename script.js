//SWITCH
//var cmd = document.getElementById('inputText').value;

var mode = 'normal';
function submitCmd() {
    var x = document.getElementById('inputForm');
    //document.getElementById('commandText').innerHTML = text;
    var cmd = document.forms['commandForm']['formInput'].value;
    if(cmd == 'time') {
        var date = new Date();
        var dateMin = date.getMinutes();
    }
}
function submitButton() {
 document.getElementById('inputForm').submit();   
}
