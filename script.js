document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to hide all content sections
    const hideAllSections = () => {
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });
    };

    // Function to show a specific content section
    const showSection = (sectionId) => {
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    };

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (page jump)

            // Get the target section ID from the href
            const sectionId = link.getAttribute('href');

            // Hide all sections and show the target section
            hideAllSections();
            showSection(sectionId);

            // Optional: Add/remove active class for styling the active link
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Hamburger menu toggle
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when a nav item is clicked (mobile UX)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });

    // Show the default section on page load (the one without the 'hidden' class initially)
    const defaultSection = document.querySelector('.content-section:not(.hidden)');
    if (defaultSection) {
        // Add the 'active' class to the link corresponding to the default section
        const defaultSectionId = '#' + defaultSection.getAttribute('id');
        const defaultNavLink = document.querySelector(`.nav-link[href="${defaultSectionId}"]`);
        if (defaultNavLink) {
            defaultNavLink.classList.add('active');
        }
    }

    // Add functionality for flipping skill cards on click
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', (event) => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    });

    

});