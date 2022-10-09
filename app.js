//first I need to grab the minimum/maximum values from the input fields
let minValue = document.getElementById("min");
let maxValue = document.getElementById("max");
let numberResult = document.getElementById("generatedNumber");
const submitButton = document.getElementById("submitButton");

//I need to create a function that checks if there's a min/max number
function checkMinValue(minValue) {
	if (minValue.value == "") {
		return "empty min field";
	} else {
		return minValue.value;
	}
}

function checkMaxValue(maxValue) {
	if (maxValue.value == "") {
		return "empty max field";
	} else {
		return maxValue.value;
	}
}

//next I need to generate a random number
function generateNumber(minValue, maxValue) {
	checkMinValue(minValue);
	checkMaxValue(maxValue);
	// return (numberResult.innerText = Math.floor(Math.random() * 100));
	return (numberResult.innerText = Math.floor(Math.random() * 144));
}

//next I need to create an event listener for the submit button
submitButton.addEventListener("click", (e) => {
	console.log(checkMinValue(minValue));
	console.log(checkMaxValue(maxValue));
	e.preventDefault();
	generateNumber();
});
