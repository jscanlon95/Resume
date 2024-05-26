document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-section");

    // Toggle button functionality
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle("hidden");
            this.textContent = content.classList.contains("hidden") ? "Expand" : "Collapse";
            adjustBodyHeight();
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
                adjustBodyHeight();
            }
        });
    });

    // Add event listeners to skill buttons
    document.querySelectorAll('.skill-button').forEach(button => {
        button.addEventListener('click', () => {
            const description = button.dataset.description;
            openModal(description); // Opening modal when a skill button is clicked
        });
    });

    // Initially set About tab and content as active
    const aboutTab = document.querySelector('nav.tabs h2.tab[data-tab-target="#about"]');
    const aboutContent = document.querySelector('#about');
    aboutTab.classList.add('active');
    aboutContent.classList.add('active');
    adjustBodyHeight();
});

// Get the modal
var modal = document.getElementById('skill-modal');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// Function to open the modal with the corresponding skill description
function openModal(description) {
    const descriptionContainer = document.getElementById('skill-description-content');
    descriptionContainer.textContent = description;
    modal.style.display = 'block'; // Display the modal
    modal.classList.add('fade-in'); // Add fade-in class to the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    modal.classList.remove('fade-in'); // Remove fade-in class when closing modal
}

// Close the modal when the user clicks on the close button
closeBtn.onclick = function() {
    closeModal();
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Function to adjust body height based on content
function adjustBodyHeight() {
    const tabContents = document.querySelectorAll('.tab-content');
    let maxContentHeight = 0;
    tabContents.forEach(tabContent => {
        if (tabContent.offsetHeight > maxContentHeight) {
            maxContentHeight = tabContent.offsetHeight;
        }
    });
    document.body.style.minHeight = maxContentHeight + 'px';
}

// Add an event listener for beforeunload to reset the scroll position
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}



/*document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click event on the "Professional Experience" tab after a slight delay
    setTimeout(function() {
        document.querySelector('[data-tab-target="#professional-experience"]').click();
    }, 100);
});*/