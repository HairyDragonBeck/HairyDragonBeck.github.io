let output;
let input;
let commands = {};

function getQueryString() {
    let pairs = window.location.search.substr(1).split('&');
    let out = {};
    for (let i in pairs) {
        let pair = pairs[i].split('=')
        let key = pair[0];
        let value = pair.length > 1 ? (isNaN(pair[1]) ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : parseInt(pair[1])) : true;
        out[key] = value;
    }
    return out;
}

window.addEventListener('load', function () {
    output = document.getElementById('commandOutput');
    input = document.getElementById('inputText');
    input.focus();

    let qs = getQueryString();
    if (qs.cmd) {
        handleCommand(qs.cmd);
    }
});


function handleCommand(input) {
    let split = input.split(' ');
    let name = split[0].toLowerCase();
    let args = split.slice(1);

    let command = commands[name];
    if (command) {
        let result = command(args);
        if (result !== undefined) {
            output.innerHTML = '' + result;
        }
    } else {
        output.innerHTML = '<span style="color:red;">Unknown command: ' + name + '</span>';
    }
}

function registerCommand(name, handler) {
    let names = [].concat(name).map(i => i.toLowerCase());
    names.forEach(i => commands[i] = handler);
}

registerCommand('SpinTheBottle', () => window.location = '/SpinTheBottle');
registerCommand(['add', '+'], args => args.map(i => parseInt(i)).filter(i => !isNaN(i)).reduce((mem, next) => mem + next, 0));