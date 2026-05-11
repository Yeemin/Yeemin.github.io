/**
 * Terminal effects for personal portal
 */
document.addEventListener('DOMContentLoaded', () => {
  // ---- Typing animation for elements with data-typing ----
  document.querySelectorAll('[data-typing]').forEach(el => {
    const text = el.getAttribute('data-typing');
    const delay = parseInt(el.getAttribute('data-delay')) || 0;
    const speed = parseInt(el.getAttribute('data-speed')) || 40;

    setTimeout(() => {
      let i = 0;
      el.textContent = '';
      const timer = setInterval(() => {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
        } else {
          clearInterval(timer);
          el.classList.add('done');
          // Reveal next elements
          const next = el.getAttribute('data-next');
          if (next) {
            document.querySelectorAll(next).forEach(n => {
              n.style.opacity = '1';
              n.style.transform = 'translateY(0)';
            });
          }
        }
      }, speed);
    }, delay);
  });

  // ---- Reveal hidden elements sequentially ----
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const delay = parseInt(el.getAttribute('data-reveal')) || 0;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay);
  });

  // ---- Animate skill bars on scroll ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-width') || '0%';
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0%';
    bar.setAttribute('data-width', w);
    observer.observe(bar);
  });

  // ---- Random flicker effect on terminal (subtle) ----
  const terminal = document.querySelector('.terminal');
  if (terminal) {
    setInterval(() => {
      if (Math.random() < 0.02) {
        terminal.style.opacity = '0.97';
        setTimeout(() => { terminal.style.opacity = '1'; }, 50);
      }
    }, 3000);
  }
});
