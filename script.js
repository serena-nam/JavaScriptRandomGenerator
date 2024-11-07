let title = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let textInput = document.getElementById("textInput");
let outputText = document.getElementById("outputText");
let outputImage = document.getElementById("outputImage");

let animals = ["tiger", "SNOWBALLLL", "moodeng", "capybara", "panda"];
let images = ["tiger.jpg", "bunny.jpg", "moodeng.jpg", "capybara.jpg", "panda.jpg"];
executeButton.addEventListener("click", function() {
	let name = textInput.value;
	generate(name);
	restyle();
});

function generate(name) {
	let randomIndex = Math.floor(Math.random() * animals.length);
	let randomOutput = animals[randomIndex];
	if(randomIndex == 1 || randomIndex == 2) {
		outputText.innerText = name + " is " + randomOutput;
	} else {
		outputText.innerText = name + " is a " + randomOutput;
	}
	
	outputImage.src = images[randomIndex];

}

function restyle() {
	let fontSizes = ["100%", "200%", "300%"];
	let randomSizeIndex = Math.floor(Math.random() * fontSizes.length);
	outputText.style.fontSize = fontSizes[randomSizeIndex];

	let fontTypes = ["Andale Mono, monospace", "AppleGothic", "Impact,Charcoal,sans-serif"];
	let randomTypeIndex = Math.floor(Math.random() * fontTypes.length);
	outputText.style.fontFamily = fontTypes[randomTypeIndex];

	let imageWidths = ["300", "600", "800"];
	let randomImgWidthIndex = Math.floor(Math.random() * imageWidths.length);
	console.log(imageWidths[randomImgWidthIndex]);
	outputImage.style.width = imageWidths[randomImgWidthIndex];
	console.log(outputImage.style.width);

}