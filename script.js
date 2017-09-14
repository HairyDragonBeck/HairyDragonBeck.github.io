$(document).ready(function() {
    var audio = document.getElementById('audio');
    audio.loop = true;
});

//SWITCH
var cmd = document.getElementById('inputText');
var submitCmd = document.getElementById('inputSubmit');

function submitCmd() {
    document.getElementById('TEMP') = cmd;

}