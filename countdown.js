function showCountdown() {
    document.getElementById("countdown-popup").style.display = "block";
    updateCountdown(); // Call updateCountdown immediately
    setInterval(updateCountdown, 1000); // Update every second
}

function closeCountdown() {
    document.getElementById("countdown-popup").style.display = "none";
}

function updateCountdown() {
    const startDate = new Date("November 16, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = 
        `⏳ It's been <b>${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds</b> since we first met! 💖`;
}
