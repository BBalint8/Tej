// Termék adatok
const products = [
    { id: 1, name: "Termék 1", price: 20, quantity: 1, image: "product1.jpg" },
    { id: 2, name: "Termék 2", price: 25, quantity: 2, image: "product2.jpg" },
];

// Kosár elemeinek megjelenítése
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    products.forEach(product => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-details">
                <h2>${product.name}</h2>
                <p>Ár: $${product.price}</p>
                <p>Mennyiség: ${product.quantity}</p>
            </div>
            <button class="remove-button" onclick="removeFromCart(${product.id})">Törlés</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const cartTotal = document.createElement("div");
    cartTotal.classList.add("cart-total");
    cartTotal.innerHTML = `<h3>Összesen: $${totalPrice}</h3>`;
    cartContainer.appendChild(cartTotal);
}

// Termék eltávolítása a kosárból
function removeFromCart(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
        renderCart();
    }
}

// Kosár megjelenítése az oldal betöltésekor
window.onload = renderCart;
