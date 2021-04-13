
const cartNav = document.querySelector(".cart-nav");
const cart = document.querySelector(".cart");
const closingX = document.querySelector(".closingX");



cartNav.addEventListener("click", ()=> {
openCart();
})

closingX.addEventListener("click", ()=> {
    closeCart();
})




function openCart() {
    cart.style.display = "block";
    setTimeout(()=> {
cart.classList.add("show-cart");
    },1);
}
function closeCart() {

    cart.classList.remove("show-cart");
    setTimeout(()=> {
        cart.style.display = "none";
            },500);
}




const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.querySelector(".quantity");
const total = document.querySelector(".total");
const priceItem = 15;
const remove = document.querySelector(".removeP");


plus.addEventListener("click", ()=> {

    total.textContent = parseInt(total.textContent) + priceItem + "$";
    quantity.textContent = parseInt(quantity.textContent) + 1;
    
});

minus.addEventListener("click", ()=> {

    if (parseInt(quantity.textContent) > 1) {
        total.textContent = parseInt(total.textContent) - priceItem + "$";
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }

    else {
        closeCart();
    }
})

remove.addEventListener("click", ()=>{
    total.textContent = 15 + "$";
    quantity.textContent = 1;
})