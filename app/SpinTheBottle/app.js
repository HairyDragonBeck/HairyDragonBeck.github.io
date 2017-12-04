var names = [];
var text = document.getElementById('text');
var inputTextVar = document.getElementById('inputText');
/*function addName() {
    var form = document.getElementById('inputForm');
    var text1 = '';
    var i;
    for (i = 0; i < form.length; i++) {
        text1 += form.elements[i].value;
    }
    text = text1;
} */
//document.getElementsByName('inputText')[0].value.innerHTML = text;
function trackChange(value) {
   //        if (e.keyCode == 13) {
     //       
       //    }
}

function submitName() {
    var inputText  = inputTextVar.value;
    document.body.innerHTML.replace('text', inputText);
}

/*window.onkeyup = keyup;
var inputTextValue;
function keyup(e) {
    inputTextValue = e.target.value;
    $('#inputText').text(inputTextValue);
    if (e.keyCode == 13) {
        text.innerHTML = inputTextValue;
    }
}
*/
