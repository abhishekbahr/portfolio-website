document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});