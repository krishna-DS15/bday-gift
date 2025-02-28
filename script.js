// Birthday Surprise Function
function startCelebration() {
    alert("🎉 Happy Birthday Very busy! 🎂🎈");
    launchConfetti(); // Call confetti animation
}

// Function to handle HEIC images (optional)
document.getElementById("birthdayImage").addEventListener("error", function() {
    this.src = "images/fallback-image.jpg"; // Provide a fallback image if HEIC fails
});
