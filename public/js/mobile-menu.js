// Mobile Menu Functionality - Separate file to avoid conflicts

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
        const body = document.body;

        // Check if elements exist (only on mobile)
        if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay) {
            console.log('Mobile menu elements not found');
            return;
        }

        console.log('Mobile menu initialized');

        // Toggle menu function
        function toggleMenu() {
            const isActive = mobileMenuBtn.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // Open menu function
        function openMenu() {
            console.log('Opening menu');
            mobileMenuBtn.classList.add('active');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            body.classList.add('menu-open');
            console.log('Menu classes:', mobileMenu.className);
        }

        // Close menu function
        function closeMenu() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked');
            toggleMenu();
        });

        // Close menu when overlay is clicked
        mobileMenuOverlay.addEventListener('click', function() {
            closeMenu();
        });

        // Close menu when a link is clicked
        mobileMenuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu on window resize if window becomes larger than mobile
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        // Close menu on ESC key press
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Prevent menu from opening if clicking inside mobile menu (except links)
        mobileMenu.addEventListener('click', function(e) {
            if (!e.target.classList.contains('mobile-menu-link') && 
                !e.target.closest('.mobile-menu-link') &&
                !e.target.closest('.mobile-menu-buttons')) {
                e.stopPropagation();
            }
        });
    });
})();

