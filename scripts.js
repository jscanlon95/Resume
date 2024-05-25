document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-section");

    // Toggle button functionality
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle("hidden");
            this.textContent = content.classList.contains("hidden") ? "Expand" : "Collapse";
        });
    });

    // Function to download ebook
    function downloadEbook() {
        var link = document.createElement('a');
        link.href = 'asset/joseph_scanlon_resume.epub';
        link.download = 'joseph_scanlon_resume.epub'; 
        link.click();
    }

    // Add event listeners to tabs
    document.querySelectorAll('nav.tabs h2.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.getAttribute('data-tab-target'));
            const isActive = tab.classList.contains('active');

            // Remove active class from all tabs
            document.querySelectorAll('nav.tabs h2.tab').forEach(t => {
                t.classList.remove('active');
            });

            // Remove active class from all tab contents
            document.querySelectorAll('.tab-content').forEach(tabContent => {
                tabContent.classList.remove('active');
            });

            // If the tab is not active, add active class to tab and target content
            if (!isActive) {
                tab.classList.add('active');
                target.classList.add('active');
            }
        });
    });

    // Add event listeners to skill buttons
    document.querySelectorAll('.skill-button').forEach(button => {
        button.addEventListener('click', () => {
            const description = button.dataset.description;
            const descriptionContainer = document.getElementById('skill-description');
            descriptionContainer.textContent = description;

            // Ensure the description is visible and has any necessary styling
            descriptionContainer.style.display = 'block';
        });
    });

    // Initially set About tab and content as active
    const aboutTab = document.querySelector('nav.tabs h2.tab[data-tab-target="#about"]');
    const aboutContent = document.querySelector('#about');
    aboutTab.classList.add('active');
    aboutContent.classList.add('active');
});


/*document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click event on the "Professional Experience" tab after a slight delay
    setTimeout(function() {
        document.querySelector('[data-tab-target="#professional-experience"]').click();
    }, 100);
});*/