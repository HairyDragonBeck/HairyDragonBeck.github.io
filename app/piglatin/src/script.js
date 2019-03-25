
var input = document.getElementById('input');
var submit = document.getElementById('submit');

submit.addEventListener('click', function() {

    var inputValue = input.value; // Get input value
  var inputString = translateWord(inputValue);
  document.getElementById('egg').innerHTML = inputString;
});

function translateWord(word) {

  var inputArray = word.split(''); // Makes each character it's own in an array
  var shifted = inputArray.shift(); // Removes first letter
  inputArray.push(shifted); // Adds first letter to end
  inputArray.push('a'); // Adds a to last letter
  inputArray.push('y'); // Adds y to last letter

	var inputString = inputArray.join('');
  return inputString;
}
// Ok, I made all of this...
// ...And then I found this:
// str.replace(/(^\w)(.+)/, '$2$1ay');

// For multiword support, us the one bellow
// str.replace(/\b(\w)(\w+)\b/g, '$2$1ay'); 
