const accordionItem = Array.from(document.querySelectorAll(".accordion")); // считываем все элементы аккордеона в массив
accordionItem.forEach((item) => {
    item.addEventListener("click", accordionHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function accordionHandler(e) {
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentItem = e.target.closest(".accordion"); // определяем текущий бокс
    let currentContent = e.target.nextElementSibling; // находим скрытый контент
    currentItem.classList.toggle("active"); // присваиваем ему активный класс
    if (currentItem.classList.contains("active")) {
        // если класс активный ..
        currentContent.style.maxHeight = 'max-content'; // открываем контент
    } else {
        // в противном случае
        currentContent.style.maxHeight = 0; // скрываем контент
    }
}