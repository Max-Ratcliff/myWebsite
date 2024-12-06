// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a scroll effect for button in the Home section
document.querySelector("#home button").addEventListener("click", function() {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: "smooth"
    });
});

// Function to open a modal with project details (can be added to Portfolio section)
function openProjectModal(projectName, projectDescription, projectLink) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${projectName}</h2>
            <p>${projectDescription}</p>
            <a href="${projectLink}" target="_blank">View on GitHub</a>
            <button class="close-modal">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.querySelector(".close-modal").addEventListener("click", function() {
        modal.remove();
    });
}

// Example usage: openProjectModal("Project 1", "This is a description of project 1.", "https://github.com/your-repo");

