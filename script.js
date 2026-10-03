/* =================================
   AGARWAL TRADING COMPANY
   Website JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MOBILE MENU
    ================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }


    /* ================================
       PRODUCT INQUIRY
    ================================= */

    const inquiryButtons = document.querySelectorAll(".inquire-btn");

    inquiryButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const productCard = button.closest(".product-card");

            if (!productCard) return;

            const productNameElement = productCard.querySelector("h3");

            if (!productNameElement) return;

            const productName = productNameElement.textContent.trim();

            const phoneNumber = "919837591626";

            const message =
                "Hello Agarwal Trading Company,%0A%0A" +
                "I am interested in the following product:%0A" +
                "Product: " + encodeURIComponent(productName) + "%0A%0A" +
                "Please share more details about this product.";

            const whatsappURL =
                "https://wa.me/" + phoneNumber + "?text=" + message;

            window.open(whatsappURL, "_blank");
        });

    });


    /* ================================
       SMOOTH SCROLL
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") return;

            const target = document.querySelector(targetID);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput =
                contactForm.querySelector('input[name="name"]');

            const phoneInput =
                contactForm.querySelector('input[name="phone"]');

            const messageInput =
                contactForm.querySelector("textarea");

            const name =
                nameInput ? nameInput.value.trim() : "";

            const phone =
                phoneInput ? phoneInput.value.trim() : "";

            const message =
                messageInput ? messageInput.value.trim() : "";

            if (!name || !phone || !message) {
                alert("Please fill in all the required details.");
                return;
            }

            const whatsappMessage =
                "Hello Agarwal Trading Company,%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Message: " + encodeURIComponent(message);

            const whatsappURL =
                "https://wa.me/919837591626?text=" +
                whatsappMessage;

            window.open(whatsappURL, "_blank");

            contactForm.reset();
        });

    }


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ================================
       SCROLL REVEAL
    ================================= */

    const revealElements =
        document.querySelectorAll(
            ".product-card, .feature-card, .about-content, .about-image, .catalog-box"
        );

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });

});
