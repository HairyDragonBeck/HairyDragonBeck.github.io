var input = document.getElementById('input');
var submit = document.getElementById('submit');


submit.addEventListener('click', function() {
	 var inputValue = input.value; // Get input value
   var inputArray = inputValue.split(''); // Makes each character it's own in an array
   var shifted = inputArray.shift(); // Removes first letter
   inputArray.push(shifted); // Adds first letter to end
   inputArray.push('a'); // Adds a to last letter
   inputArray.push('y'); // Adds y to last letter
   
   		inputArray.reduce(joinTogether());
   
   console.log(inputArray)
});

function joinTogether(value, out) {
 	return value + out;
}
