//SWITCH
var cmd = document.forms["cmdInput"]["inputText"].value;

function submitCmd() {
    return cmd;
    switch (cmd) {
        case test:
            return cmd;
            break;
    }
}

$(document).ready(function() {
    $(body).keypress(function(e) {
        var mode = 'normal';
        switch (e.charCode) {
            // http://jsfiddle.net/mmmz8/
            case 17 + 66:
                mode = 'teacher';
                break;

        }
        if (mode == 'teacher') {
            document.getElementById('commandText').style.display = 'hidden' ;


        }
        if (mode == 'normal') {
            document.getElementById('commandText').style.display = 'inline' ;

        }

    });
});
