document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-section");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle("hidden");
            this.textContent = content.classList.contains("hidden") ? "Expand" : "Collapse";
        });
    });
});


function downloadEbook() {
    var link = document.createElement('a');
    link.href = 'asset/joseph_scanlon_resume.epub';
    link.download = 'joseph_scanlon_resume.epub'; 
    link.click();
}