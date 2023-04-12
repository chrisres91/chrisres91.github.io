var clownBtn = document.getElementById('clownBtn');
var clownImg = document.getElementById('clownImg');

clownBtn.addEventListener('mousedown', function() {
  // Generate random delay between 2.5 and 5 seconds (2500 and 5000 milliseconds)
  var delay = Math.floor(Math.random() * 2500) + 2500;

  // Show clown image after the random delay
  setTimeout(function() {
    clownImg.style.display = 'block';
  }, delay);

  // Hide clown image after 3 seconds (3000 milliseconds)
  setTimeout(function() {
    clownImg.style.display = 'none';
  }, delay + 3000);
});
