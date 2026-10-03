/* =========================================
   DANIEL AWOPETU PORTFOLIO
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "×";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   DARK MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {

            themeToggle.textContent = "☀";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "◐";

            localStorage.setItem("theme", "light");

        }

    });


    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀";

    }

}


/* =========================================
   PROJECT FILTERS
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter = button.dataset.filter;


        projectCards.forEach(function (card) {

            const category = card.dataset.category;


            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

const projectButtons = document.querySelectorAll(".open-project");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (!modal) {
            return;
        }


        const title = button.dataset.title;
        const description = button.dataset.description;


        if (modalTitle) {

            modalTitle.textContent = title;

        }


        if (modalDescription) {

            modalDescription.textContent = description;

        }


        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("no-scroll");

    });

});


function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("no-scroll");

}


if (modalClose) {

    modalClose.addEventListener("click", closeModal);

}


if (modalOverlay) {

    modalOverlay.addEventListener("click", closeModal);

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");


if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   NAVBAR SHADOW
========================================= */

const navbar = document.getElementById("navbar");


if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.05)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

}