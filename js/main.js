// simple test to confirm JS loaded
console.log('main.js loaded');
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-loaded');
});