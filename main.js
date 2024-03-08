let mobileMenuBtn= document.querySelector(".burger_menu");
let mobileMenu= document.querySelector(".nav_menu_mobile")

mobileMenuBtn.addEventListener("click",handleMobileMenu)


function handleMobileMenu(){
    mobileMenu.classList.toggle("active");
    
}