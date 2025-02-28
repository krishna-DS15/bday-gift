function launchConfetti() {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            spread: 160,
            startVelocity: 30,
            colors: ['#ff4081', '#ffcc00', '#00e676', '#3f51b5']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
