const openSidebar = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
})

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})
// ----------------------------------------------------------------------------
const cart = document.getElementById("cart");
const checkoutCart = document.querySelector(".checkout-cart");

cart.addEventListener("click", () => {
    if(checkoutCart.style.display == "none") {
        checkoutCart.style.display = "inline";
    } else {
        checkoutCart.style.display = "none";
    }
})


// ------------------------------------------------------------------------------------
const quantity = document.getElementById("quantity");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let counter = 0;

minus.addEventListener("click", () => {
    if(counter - 1 < 0) {
        alert("Sorry you can't get less then zero shoes")
    } else {
        counter -= 1
        quantity.innerHTML = counter
    }
})

plus.addEventListener("click", () => {
    counter += 1
    console.log(counter)
    quantity.innerHTML = counter
})