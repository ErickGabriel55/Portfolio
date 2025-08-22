function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/menu/close_white_36dp.svg";
    }
}

const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "images/menu/menu_white_36dp.svg";
        }
    });
});