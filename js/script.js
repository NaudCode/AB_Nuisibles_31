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
});