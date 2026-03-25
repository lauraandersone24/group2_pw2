/* =========================
   NAVBAR SCROLL (3.1)
========================= */

const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        // tikai uz mazajiem ekrāniem
        if (window.innerWidth < 992) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });
}


/* =========================
   DARK MODE (3.2)
========================= */

const toggleBtn = document.getElementById("themeToggle");

// ielādē saglabāto tēmu
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// toggle
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}


/* =========================
   SERVICE FILTER (3.3)
========================= */

const searchInput = document.getElementById("searchInput");
const services = Array.from(document.querySelectorAll(".service-item"));

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        const filtered = services.filter(service => {
            return service.textContent.toLowerCase().includes(value);
        });

        // paslēpj visus
        services.forEach(service => service.style.display = "none");

        // rāda filtrētos
        filtered.forEach(service => service.style.display = "block");
    });
}


/* =========================
   FOOTER (3.5)
========================= */

const footer = document.querySelector("footer");

if (footer) {
    // dinamiskais gads
    const year = document.createElement("p");
    year.textContent = `© ${new Date().getFullYear()} Cat Website`;

    footer.appendChild(year);

    // hover efekts
    footer.addEventListener("mouseenter", () => {
        footer.style.backgroundColor = "#333";
    });

    footer.addEventListener("mouseleave", () => {
        footer.style.backgroundColor = "";
    });
}