function startSharing(){

const section = document.querySelector(".categories");

if(section){
section.scrollIntoView({behavior:"smooth"});
}

}


function becomeVendor(){

window.location.href = "/views/vendor-register.html";

}


function openCategory(category){

window.location.href = `/views/product.html?category=${category}`;

}