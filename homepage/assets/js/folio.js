// Footer year
document.addEventListener('DOMContentLoaded', function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var mainNav = document.getElementById('mainNav');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (mainNav.style.display === 'flex') {
        mainNav.style.display = 'none';
      } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '70px';
        mainNav.style.right = '1rem';
        mainNav.style.background = 'white';
        mainNav.style.padding = '0.6rem';
        mainNav.style.borderRadius = '10px';
        mainNav.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
      }
    });
  }
});
