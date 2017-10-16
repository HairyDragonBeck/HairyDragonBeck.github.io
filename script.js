//SWITCH
//var cmd = document.getElementById('inputText').value;

var mode = 'normal';
function submitCmd() {
    var x = document.getElementById('inputForm');
    var text = '';
    //int i = x.elements.length;
    //text += x.elements.value;
    //document.getElementById('commandText').innerHTML = text;
    var cmd = document.forms['commandForm']['formInput'].value;
   document.getElementById('commandText').innerHTML = cmd;
    
}
function submitButton() {
 document.getElementById('inputForm').submit();   
}
