window.onscroll = function (){
    let menu = document.querySelector(".menu_login", ".menu_logout");
    if (window.pageYOffset > 100){
        menu.style.backgroundColor = "rgba(50, 112, 53, 0.900)";
    }
    else{
        menu.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}