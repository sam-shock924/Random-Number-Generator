let minValue = document.getElementById("min");
let maxValue = document.getElementById("max");
let numberResult = document.getElementById("generatedNumber");

function generateNumber(minValue, maxValue) {
	return (numberResult.innerText = Math.floor(
		Math.random() * (maxValue - minValue + 1) + minValue
	));
}

document.getElementById("submitButton").addEventListener("click", (e) => {
	e.preventDefault();
	if (!minValue.value && !maxValue.value) {
		numberResult.innerText = Math.floor(Math.random() * 1000);
	} else if (!minValue.value) {
		numberResult.innerText = Math.floor(
			Math.random() * parseInt(maxValue.value)
		);
	} else {
		generateNumber(parseInt(minValue.value), parseInt(maxValue.value));
	}
});
