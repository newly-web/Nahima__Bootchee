
// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    loader.classList.add("fade-out"); // Fade out loader

});

// Close menu when a link is clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-icon').checked = false;
    });
});

// automatic email redirect
window.handleEmailClick = function () {
    const email = "Jaciliennahimabusiness@gmail.com";
   
    navigator.clipboard.writeText(email)
        .then(() => alert("Email copied to clipboard!"))
        .catch(err => {
            alert("Failed to copy email.");
            console.error(err);
        });
};
// scrolling imgs
function revealOnScroll() {
    const elements = document.querySelectorAll('.slide-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        // Only reveal when element is fully entering the viewport
        if (elementTop < windowHeight && elementBottom > 0) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

