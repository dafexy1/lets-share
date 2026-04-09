let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){

document.getElementById("cart-count").innerText = cart.length;

}

updateCartCount();