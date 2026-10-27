// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
});

// Close mobile nav after clicking a link
links?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
    })
);

// Reveal sections on scroll (progressive enhancement)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.08 }
);
document.querySelectorAll('.section, .hero').forEach((el) => observer.observe(el));

// Log current page view date in console (harmless, helps you verify)
console.log('GoShuttle portfolio — Sinethemba Mkhoma, ' + new Date().toLocaleDateString());