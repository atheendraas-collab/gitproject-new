/* ================= CART ================= */

let cart = [];

let currentProduct = "";


/* Product prices */

const prices = {

    "iPhone 17 Pro Max": 149900,

    "Galaxy S26 Ultra": 139999,

    "Pixel 10 Pro": 109999,

    "Luxury Fold X": 189900,

    "iPhone Air": 89900,

    "Galaxy Z Fold": 164999

};


/* Add product */

function addToCart(product) {

    cart.push(product);

    updateCart();

    alert(product + " added to your cart.");
}


/* Update cart */

function updateCart() {

    document.getElementById("cartCount").textContent =
        cart.length;


    const cartItems =
        document.getElementById("cartItems");


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        document.getElementById("cartTotal").textContent =
            "₹0";

        return;
    }


    let html = "";

    let total = 0;


    cart.forEach((product, index) => {

        total += prices[product];


        html += `

            <div class="cart-item">

                <div>

                    <h4>${product}</h4>

                    <p>
                        ₹${prices[product].toLocaleString("en-IN")}
                    </p>

                </div>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;

    });


    cartItems.innerHTML = html;


    document.getElementById("cartTotal").textContent =
        "₹" + total.toLocaleString("en-IN");
}


/* Remove item */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* ================= CART PANEL ================= */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");

}


function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");

}


/* ================= PRODUCT MODAL ================= */

function viewProduct(product) {

    currentProduct = product;


    document.getElementById("modalProductName")
        .textContent = product;


    document.getElementById("modalPrice")
        .textContent =
        "₹" + prices[product].toLocaleString("en-IN");


    document.getElementById("modalDescription")
        .textContent =
        "Experience premium performance, beautiful design and advanced technology with the " +
        product +
        ".";


    document.getElementById("productModal")
        .style.display = "flex";
}


function closeModal() {

    document.getElementById("productModal")
        .style.display = "none";
}


function addModalProduct() {

    addToCart(currentProduct);

    closeModal();
}


/* ================= FILTER ================= */

function filterProducts(category, button) {

    const products =
        document.querySelectorAll(".product-card");


    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(filter => {

        filter.classList.remove("active");

    });


    button.classList.add("active");


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= SEARCH ================= */

function openSearch() {

    document.getElementById("searchPanel")
        .style.display = "block";

    document.getElementById("searchInput")
        .focus();
}


function closeSearch() {

    document.getElementById("searchPanel")
        .style.display = "none";

}


function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();


        if (name.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");


    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "85px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "25px";

        nav.style.background = "#111";

        nav.style.flexDirection = "column";

        nav.style.gap = "20px";

    }

}


/* ================= NEWSLETTER ================= */

function subscribe() {

    const email =
        document.getElementById("email").value;


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (!email.includes("@")) {

        alert("Please enter a valid email.");

        return;
    }


    alert(
        "✨ Welcome to VÉRSE!\n\n" +
        "You have successfully subscribed."
    );


    document.getElementById("email").value = "";

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    alert(
        "Thank you for shopping with VÉRSE.\n\n" +
        "Checkout system coming soon."
    );

}


/* ================= MODAL OUTSIDE CLICK ================= */

window.onclick = function(event) {

    const modal =
        document.getElementById("productModal");


    if (event.target === modal) {

        closeModal();

    }

};
