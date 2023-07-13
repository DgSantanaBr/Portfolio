//  script em JS que adiciona uma classe "active" ao link do menu atual
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav a');

window.addEventListener("scroll", function()  {
  const conteudo = document.getElementById("menu");
  const limite = conteudo.offsetTop + conteudo.clientHeight;
  if (window.pageYOffset >= conteudo.offsetTop && window.pageYOffset > limite) {
    conteudo.classList.add("modMenu");
    
  } else {

    conteudo.classList.remove("modMenu");
    
  }
});
    
   