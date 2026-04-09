const params = new URLSearchParams(window.location.search);

const category = params.get("category");

document.getElementById("category-title").innerText =
category.toUpperCase();


fetch(`/api/products/${category}`)
.then(res=>res.json())
.then(products=>{

const container = document.getElementById("product-list");

products.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="product-price">£${product.price}</p>

<button onclick="addToCart('${product._id}')">
Add to Cart
</button>

</div>

`;

});

});