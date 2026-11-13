
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


/* CLOSE MENU WHEN LINK IS CLICKED */

const navItems = navLinks.querySelectorAll("a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


/* =========================
   EMAIL FORM VALIDATION
========================= */

const signupForm = document.getElementById("signupForm");

const emailInput = document.getElementById("email");

const emailError = document.getElementById("emailError");

const formAnnouncement = document.getElementById("formAnnouncement");


signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue = emailInput.value.trim();

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Empty email validation

    if (emailValue === "") {

        emailError.textContent = "Please enter your email address.";

        formAnnouncement.textContent =
            "Please enter your email address.";

        emailInput.setAttribute("aria-invalid", "true");

        emailInput.focus();

        return;

    }


    // Invalid email validation

    if (!emailPattern.test(emailValue)) {

        emailError.textContent = "Please enter a valid email address.";

        formAnnouncement.textContent =
            "Please enter a valid email address.";

        emailInput.setAttribute("aria-invalid", "true");

        emailInput.focus();

        return;

    }


    // Successful validation

    emailError.textContent = "";

    emailInput.removeAttribute("aria-invalid");

    formAnnouncement.textContent =
        "Your email address has been successfully validated.";

    alert("Your email address is valid! Thank you for your interest in Fylo.");

    signupForm.reset();

});


/* =========================
   CLEAR ERROR WHILE TYPING
========================= */

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    emailInput.removeAttribute("aria-invalid");

    formAnnouncement.textContent = "";

});
