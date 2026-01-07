// 1️⃣ MOBILE NAV TOGGLE
const menuToggle = document.querySelector(".menu-toggle"); // button or icon
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Optional: close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// 2️⃣ SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
