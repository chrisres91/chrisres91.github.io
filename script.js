var clownBtn = document.getElementById('clownBtn');
var clownImg = document.getElementById('clownImg');
var bar = document.getElementById('bar');
var barContainer = document.querySelector('.bar-container');
var holding = false;
var barInterval;

clownBtn.addEventListener('mousedown', function() {
    // Reset the bar
    bar.style.width = '0%';
    // Start the bar fill animation
    barInterval = setInterval(function() {
        bar.style.width = parseFloat(bar.style.width) + 1 + '%';
    }, 50);
    holding = true;
    // Generate random delay between 2.5 and 5 seconds (2500 and 5000 milliseconds)
    var delay = Math.floor(Math.random() * 2500) + 2500;
    // Show clown image after the random delay
    setTimeout(function() {
        // Stop the bar fill animation
        clearInterval(barInterval);
        // Hide the bar
        barContainer.style.display = 'none';
        clownImg.style.display = 'block';
    }, delay);
});

clownBtn.addEventListener('mouseup', function() {
    if (holding) {
        // Reset holding status and hide the clown image
        holding = false;
        clownImg.style.display = 'none';
        // Reset the bar
        bar.style.width = '0%';
        barContainer.style.display = 'block';
    }
});

clownBtn.addEventListener('mouseout', function() {
    if (holding) {
        // Reset holding status and hide the clown image
        holding = false;
        clownImg.style.display = 'none';
        // Reset the bar
        bar.style.width = '0%';
        barContainer.style.display = 'block';
    }
});
