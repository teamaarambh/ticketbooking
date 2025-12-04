// tiny JS: mobile menu toggle + service worker register
document.addEventListener('DOMContentLoaded', function(){
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if(menuToggle){
    menuToggle.addEventListener('click', function(){
      if(mainNav.style.display === 'flex') mainNav.style.display = 'none';
      else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.right = '1rem';
        mainNav.style.top = '68px';
        mainNav.style.background = 'rgba(43,27,38,0.95)';
        mainNav.style.borderRadius = '8px';
        mainNav.style.padding = '0.6rem';
      }
    });
  }

  // set current year in footer
  var y = new Date().getFullYear();
  var yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = y;

  // register service worker if present
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(function(err){
      console.warn('SW registration failed:', err);
    });
  }
});
