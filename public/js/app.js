// Smooth scroll to categories
function startSharing(){
  const section = document.querySelector(".categories");
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
}

// Button bounce effect
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
  });
});

function becomeVendor(){
  window.location.href = "/views/vendor-register.html";
}

function openCategory(category){
  window.location.href = `/views/products.html?category=${category}`;
}

// function startSharing(){

// const section = document.querySelector(".categories");

// if(section){
// section.scrollIntoView({behavior:"smooth"});
// }

// }


// function becomeVendor(){

// window.location.href = "/views/vendor-register.html";

// }


function openCategory(category){

window.location.href = `/views/product.html?category=${category}`;

}