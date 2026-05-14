const btn = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                setTimeout(() => {
                    history.replaceState(null, null, window.location.pathname);
                }, 0); 
            }
        });
    });
});