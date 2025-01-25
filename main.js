let elButton = document.querySelector(".header__navigatr-btn"); // Birinchi mos bo'lgan html elemetni qaytaradi
let elHeader = document.querySelector(".header");

//addEventListener - hodisaga qiloq solayapti hodis esan 'click' evt{}-Bu callback funksiyasi, ya'ni hodisa yuz berganda bajariladigan kod.
elButton.addEventListener("click", (evt) => {
  elHeader.classList.toggle("header--active");
});

// hodisalar:
//'mouseover' – element ustiga sichqoncha olib borilganda.
// 'keydown' – klaviatura tugmasi bosilganda.
// 'submit' – formani jo‘natishda.
