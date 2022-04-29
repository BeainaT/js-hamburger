//show and hide hamburger menu on user click
const showMenu = document.getElementById("open-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
showMenu.addEventListener("click", 
    function(){
        hamburgerMenu.style.display = "block";
    }
);
const hideMenu = document.getElementById("close-menu");
hideMenu.addEventListener("click",
    function(){
        hamburgerMenu.style.display = "none";
    }
);