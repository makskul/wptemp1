
var menuContainer = document.querySelector('.header-nav')
var gamburgBtn = document.querySelector('.js-gamburg-btn')
var menuFlag = false;

gamburgBtn.addEventListener("click", () => {
    if (menuFlag) {
        menuContainer.style.display = 'none'
    } else {
        menuContainer.style.display = 'block'
    }

    menuFlag = !menuFlag
});