let images = Array.from(document.querySelectorAll('img'));
let imagesScrollTop = images.map( image => 
      image.getBoundingClientRect().top - (innerHeight/2))

console.log(imagesScrollTop);


// !ESCUCHAMOS EL SCROLL
window.addEventListener('scroll', () => {
  imagesScrollTop.forEach( (el,i) => {
    if (scrollY >= el) {
      images[i].classList.add('animate')
    }
  })
});