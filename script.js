// Récupère toutes les sections à animer
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < triggerPoint) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
            section.classList.remove('visible');
        }
    });
});
