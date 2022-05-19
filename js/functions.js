/*document.addEventListener("scroll", function(){
  var scroll = window.scrollY;
  var scrollArrow = document.getElementById('scrollDown')
  if(scroll > 0)
  {
    console.log(scroll)
    
    scrollArrow.classList.toggle('activeScroll')
  }
  else{
    scrollArrow.classList.remove('activeScroll')
    console.log(scroll)
    console.log("não há scroll")
  }
})*/

window.addEventListener("DOMContentLoaded", function (event) {
  
  /* Toggle menu mobile */
  var toggleButton = document.getElementById('mobile-btn')
  var menu = document.getElementById('nav-list');

  toggleButton.addEventListener("click", () =>{
  menu.classList.toggle("active")
  })

  /* Alterar cor */
  var productImg = document.getElementById('productImg')
  var corAzul = document.getElementById('corAzul');
  var corPreta = document.getElementById('corPreta');
  var corBege = document.getElementById('corBege')
  var corCinza = document.getElementById('corCinza')
  var corMarrom = document.getElementById('corMarrom')
  var corVerde = document.getElementById('corVerde')
  
  corAzul.addEventListener("click", () => {
    productImg.src = "./img/produto/azulFRENTE.png";
  })
  corPreta.addEventListener("click", () => {
    productImg.setAttribute('src', './img/produto/pretaFRENTE.png')
  })
  corBege.addEventListener("click", () => {
    productImg.setAttribute('src', './img/produto/begeFRENTE.png')
  })
  corCinza.addEventListener("click", () => {
    productImg.setAttribute('src', './img/produto/cinzaFRENTE.png')
  })
  corMarrom.addEventListener("click", () => {
    productImg.setAttribute('src', './img/produto/marromFRENTE.png')
  })
  corVerde.addEventListener("click", () => {
    productImg.setAttribute('src', './img/produto/verdeFRENTE.png')
  })
})