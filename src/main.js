// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    loader.classList.add("fade-out"); // Fade out loader
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

