document.addEventListener('DOMContentLoaded', () => {
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  // Переключение табов

  // for (let i = 0; i < featureLinkElems.length; i++) {
  //   featureLinkElems[i].addEventListener('click', () => {
  //     featureSubElems[i].classList.toggle('hidden')
  //     featureLinkElems[i].classList.toggle('feature__link_active')
  //   })    
  // }

  // Разворачивание и сворачивание по клику

  featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', ( ) => {
      if (featureLinkElems[index].classList.contains('feature__link_active')) {
        featureSubElems[index].classList.add('hidden');
        featureLinkElems[index].classList.remove('feature__link_active');

      } else {           
        //переключение 
        featureSubElems.forEach((featureSubElem) => {
        featureSubElem.classList.add('hidden');
        })
        featureLinkElems.forEach((featureLinkElem) => {
        featureLinkElem.classList.remove('feature__link_active');
        })
        
        featureSubElems[index].classList.remove('hidden');
        btn.classList.add('feature__link_active');          
      }
    })
  })
});

