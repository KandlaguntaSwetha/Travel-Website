/* =========================================
   TRAVEL WORLD - JAVASCRIPT
   ========================================= */


/* =========================================
   1. PAGE LOADED
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Travel World website loaded successfully.");


    /* =========================================
       2. MOBILE NAVIGATION
       ========================================= */

    const navLinks = document.querySelector(".nav-links");

    const menuButton = document.querySelector(".menu-button");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    /* =========================================
       3. DESTINATION SEARCH
       ========================================= */

    const searchInput =
        document.getElementById("destinationSearch");

    const destinationCards =
        document.querySelectorAll(".searchable");


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText =
                searchInput.value.toLowerCase().trim();


            destinationCards.forEach(function (card) {

                const destinationName =
                    card.getAttribute("data-name")
                    .toLowerCase();


                if (destinationName.includes(searchText)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* =========================================
       4. CONTACT FORM
       ========================================= */

    const contactForm =
        document.querySelector(".contact-form form");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const destination =
                document.getElementById("destination").value;

            const message =
                document.getElementById("message").value.trim();


            /* Check required fields */

            if (
                name === "" ||
                email === "" ||
                destination === "" ||
                message === ""
            ) {

                alert("Please fill in all the fields.");

                return;

            }


            /* Check email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }


            /* Success message */

            alert(
                "Thank you, " +
                name +
                "!\n\n" +
                "Your enquiry for " +
                destination +
                " has been submitted successfully."
            );


            /* Clear form */

            contactForm.reset();

        });

    }


    /* =========================================
       5. BOOK NOW BUTTONS
       ========================================= */

    const bookButtons =
        document.querySelectorAll(".package .btn");


    bookButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Booking button clicked.");

        });

    });


    /* =========================================
       6. GALLERY IMAGE CLICK
       ========================================= */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            alert(
                "You selected: " +
                image.alt
            );

        });

    });


    /* =========================================
       7. CURRENT YEAR
       ========================================= */

    const yearElements =
        document.querySelectorAll(".current-year");


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });


});
