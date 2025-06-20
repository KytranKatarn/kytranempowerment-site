// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenuOverlay = document.getElementById('mobileMenu');

    if (mobileMenuIcon && mobileMenuOverlay) {
        mobileMenuIcon.addEventListener('click', () => {
            mobileMenuOverlay.classList.toggle('active-menu');
            // Toggle body scroll to prevent scrolling when menu is open
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active-menu') ? 'hidden' : '';
        });

        // Close menu when a link is clicked (optional, but good UX)
        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active-menu');
                document.body.style.overflow = ''; // Re-enable body scroll
            });
        });
    }
});
