// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Année en cours dans le footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Gérer l'ouverture/fermeture du menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('open');
        });

        closeMobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    }

    // Gérer la fermeture du menu mobile lorsque l'on clique sur un lien de navigation
    // Cela améliore l'expérience utilisateur en masquant le menu après la sélection d'une page
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }
        });
    });
});