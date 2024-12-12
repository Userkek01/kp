// Sélectionne les éléments à animer
const heartContainer = document.querySelector('.heart-container');
const message = document.getElementById('message');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.7; // Déclenche à 70% de la hauteur

    const heartTop = heartContainer.getBoundingClientRect().top;

    if (heartTop < triggerPoint) {
        heartContainer.classList.add('visible'); // Montre le cœur
        setTimeout(() => {
            message.classList.add('reveal'); // Montre le message
        }, 500); // Laisse un petit délai pour la fluidité
    }
});
