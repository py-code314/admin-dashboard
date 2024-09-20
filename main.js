document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('#toggleButton');
  const navlinks = document.querySelector('.nav__links');

  toggleButton.addEventListener('click', () => {
    navlinks.style.display = navlinks.style.display === 'none' ? 'block' : 'none';
    toggleButton.setAttribute('aria-expanded', navlinks.style.display === 'none' ? 'true' : 'false');

    window.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        navlinks.style.display = 'none';
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    }, true);
  })
})