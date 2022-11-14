const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbarText = document.querySelector(".navbar");


//!buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if((!e.composedPath().includes(searchBtn)) && (!e.composedPath().includes(searchForm))) { /*composedPath searchın dışında kalan kısımlara tılandığında kapanmasını sağlar*/ 
        searchForm.classList.remove("active");
        }
    })
});

cartBtn.addEventListener("click", function() {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if((!e.composedPath().includes(cartBtn)) && (!e.composedPath().includes(cartItem))) { /*composedPath searchın dışında kalan kısımlara tılandığında kapanmasını sağlar*/ 
        cartItem.classList.remove("active");
        }
    })
});

menuBtn.addEventListener("click", function() {
    navbarText.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if((!e.composedPath().includes(menuBtn)) && (!e.composedPath().includes(navbarText))) { /*composedPath searchın dışında kalan kısımlara tılandığında kapanmasını sağlar*/ 
        navbarText.classList.remove("active");
        }
    })
});

