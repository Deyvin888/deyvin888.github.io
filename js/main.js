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
            const href = this.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();
                e.stopImmediatePropagation();

                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    if (window.location.hash !== "") {
                         history.replaceState(null, null, window.location.pathname);
                    }
                }
            }
        }, { passive: false });
    });
});

function initProjectStack() {
  const stack = document.getElementById("projectStack");
  if (!stack) return;

  const cards = Array.from(stack.children);

  function renderStack() {
    cards.forEach((card, index) => {
      const depth = index;
      
      const translateY = depth * -10;
      const translateX = depth * -22;
      const scale = 1 - depth * 0.03;
      
      card.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`;
      card.style.zIndex = cards.length - depth;
      card.style.opacity = depth >= 3 ? "0" : "1"; 
    });
  }

  stack.addEventListener("click", () => {
    if (cards.length <= 1) return;

    const topCard = cards.shift();
    
    topCard.style.transform = `translateX(140%) scale(0.95)`;
    topCard.style.opacity = "0";

    setTimeout(() => {
      cards.push(topCard);
      stack.appendChild(topCard);
      renderStack();
    }, 350);
  });

  renderStack();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectStack);
} else {
  initProjectStack();
}