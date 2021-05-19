//querySelectorAll('a[href^="#"]:not(a[href="#"])') - выдает ошибку
//const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
const smoothScrollElems = document.querySelectorAll('a[href^="#"]');
console.log('smoothScrollElems: ', smoothScrollElems);

smoothScrollElems.forEach((link) => {
  link.addEventListener('click', (event) => {
    
    event.preventDefault();

    const id = link.getAttribute('href').substring(1);

    document.getElementById(id).scrollIntoView({
      behavior:'smooth'
    });
  });
});