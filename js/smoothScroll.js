//querySelectorAll('a[href^="#"]:not(a[href="#"])') - выдает ошибку

//выбор ссылок по классу добавленному в вверстку
const smoothScrollElems = document.querySelectorAll('.js_smooth_links');

//выбор всех ссылок
//const smoothScrollElems = document.querySelectorAll('a[href^="#"]');

smoothScrollElems.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const id = link.getAttribute('href').substring(1);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});