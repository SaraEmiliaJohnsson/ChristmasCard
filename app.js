let slideIndex = 0;

document.getElementById("first-card").addEventListener("click", function () {
	// Hide the first card
	document.getElementById("first-card").style.display = "none";

	// Display the slideshow
	document.getElementById("slideshow").style.display = "block";
	document.getElementById("backgroundMusic").play();

	// Call your function to start the slideshow
	startSlideshow();
});

function startSlideshow() {
	document.getElementById("slideshow").style.display = "flex";
	showSlides();
}

function showSlides() {
	let i;
	const slides = document.getElementsByClassName("mySlides");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 3000); // Change slide every 2 seconds
}
