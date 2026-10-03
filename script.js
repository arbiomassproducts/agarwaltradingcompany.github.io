/* =========================================
   AGARWAL TRADING COMPANY
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

/*
   India country code = 91

   ATC number:
   9837591626

   We use ONLY this number.
*/

const whatsappNumber = "919837591626";


/* =========================================
   WHATSAPP PRODUCT INQUIRY
========================================= */

function inquireProduct(productName) {

    const message =
`Hello Agarwal Trading Company,
I want to inquire about ${productName}.
Brand:
Type:`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar =
            document.getElementById("navbar");

        navbar.classList.remove("active");

    });

});


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   TOILET SEAT / SINGLE SUITE CATALOG
========================================= */

/*
   IMPORTANT:

   DO NOT add prices here.

   When you upload the catalog, we will add
   the actual products from your catalog.

   Each product can contain:

   - name
   - image
   - description
   - specifications

   Example:

   {
       name: "Actual Product Name",
       image: "catalog/product-1.jpg",
       description: "Actual description",
       specifications: "Actual specifications"
   }

   The example below is NOT a real product.
   It is only showing the structure.
*/


const toiletSeatCatalog = [

    /*
    {
        name: "Product Name",
        image: "catalog/product-1.jpg",
        description: "Product description from catalog.",
        specifications: "Specifications from catalog."
    },

    {
        name: "Another Product",
        image: "catalog/product-2.jpg",
        description: "Product description from catalog.",
        specifications: "Specifications from catalog."
    }
    */

];


/* =========================================
   DISPLAY CATALOG
========================================= */

function loadCatalog() {

    const container =
        document.getElementById("catalog-container");

    const emptyMessage =
        document.getElementById("catalog-empty");


    if (!container) {
        return;
    }


    /*
       If there are no catalog products yet,
       keep the "Catalog Coming Soon" message.
    */

    if (toiletSeatCatalog.length === 0) {

        if (emptyMessage) {
            emptyMessage.style.display = "block";
        }

        return;
    }


    /*
       Hide empty catalog message when
       products have been added.
    */

    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }


    container.innerHTML = "";


    /* =====================================
       CREATE EACH PRODUCT CARD
    ===================================== */

    toiletSeatCatalog.forEach(function(product) {


        const card =
            document.createElement("article");


        card.className =
            "catalog-product";


        /*
           Create safe product data.

           This prevents special characters
           from breaking the HTML.
        */

        const productName =
            product.name || "Product";


        const productImage =
            product.image || "images/placeholder.jpg";


        const productDescription =
            product.description || "";


        const productSpecifications =
            product.specifications || "";


        card.innerHTML = `

            <div class="catalog-product-image">

                <img
                    src="${productImage}"
                    alt="${productName}"
                    loading="lazy"
                >

            </div>


            <div class="catalog-product-info">

                <h3>
                    ${productName}
                </h3>


                <p>
                    ${productDescription}
                </p>


                ${
                    productSpecifications
                    ?
                    `
                    <p class="specifications">
                        ${productSpecifications}
                    </p>
                    `
                    :
                    ""
                }


                <button
                    class="inquire-btn"
                    onclick="inquireProduct(${JSON.stringify(productName)})">

                    Inquire About This Product

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   LOAD CATALOG WHEN PAGE LOADS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCatalog();

    }
);
