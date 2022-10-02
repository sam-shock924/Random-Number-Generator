//first I need to grab the minimum/maximum values from the input fields
let minValue = document.getElementById("min").value;
let maxValue = document.getElementById("max").value;
let numberResult = document.getElementById("generatedNumber");
const submitButton = document.getElementById("submitButton");

//next I need to generate a random number
function generateNumber(minValue, maxValue) {
	return (numberResult.innerText = Math.floor(Math.random() * 654));
}

generateNumber();
//next I need to create an event listener for the submit button
