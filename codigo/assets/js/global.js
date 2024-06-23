// Função do menu principal
function menuShow() {
    let menuMobile = document.querySelector('.global-mobile-menu');
    if (menuMobile.classList.contains('global-open')) {
        menuMobile.classList.remove('global-open');
        document.querySelector('.global-icon').src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('global-open');
        document.querySelector('.global-icon').src = "images/close_white_36dp.svg";
    }
}