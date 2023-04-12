var clownBtn = document.getElementById('clownBtn');
var clownImg = document.getElementById('clownImg');

clownBtn.addEventListener('mousedown', function() {
  // Show clown image
  clownImg.style.display = 'block';

  // Hide clown image after 3 seconds
  setTimeout(function() {
    clownImg.style.display = 'none';
  }, 3000);
});
