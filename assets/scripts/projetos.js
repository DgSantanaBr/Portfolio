// Requisição e resposta transformada em JSON da API //
let projetos = []

const endPointApi = '/assets/json/data.json'

getBuscarProjetoDaAPI()

async function getBuscarProjetoDaAPI() {
  const resp = await fetch(endPointApi)
  projetos = await resp.json()
  
  exibirProjetos(projetos)
};
// Função para inserir as tags do corpo HTML e exibir a resposta da API //

function exibirProjetos(listaDeProjetos) {
  //Html inserido na section de projetos
  const tagDaSection = document.getElementById('projects__content')
  tagDaSection.innerHTML += 
  `      
  <div id="container-projetos" class="container-projetos">    
  
  <button class="arrow-left control" aria-label="Previous image">◀</button>
  <button class="arrow-right control" aria-label="Next image">▶</button>
  
  <div class="projetos-wrapper">
  <div class="galeria-de-projetos" id="galeria">
  </div>
  </div>
  
  </div>      `
  
  //Função para verificar quantidade de projetos na API e inseri-los no corpo//
  listaDeProjetos.forEach(projetos => {
    const elementoInsereProjeto = document.getElementById('galeria');
    elementoInsereProjeto.innerHTML +=
  `
   <div class= "item current-item">
        <img src="${projetos.imagem}" class="imagem-projeto" alt="Imagem-projeto"/>
        <h2>${projetos.nome}</h2>
        <button>
        <a href="${projetos.SaibaMais}" target="_blank" alt="Link-projeto" > Visite o projeto</a>
        </button>    
    </div>
  `
  });
  
  const controls = document.querySelectorAll(".control");
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;
  let currentItem = 0;

  
  controls.forEach((control) => {
    control.addEventListener("click", () => {
    const  isLeft = control.classList.contains("arrow-left");
  
      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }
  
      if (currentItem >= maxItems) {
        currentItem = 0;
      }
  
      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }
  

      items.forEach((item) => item.classList.remove("current-item"));
  
      items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
      
      });
  
      items[currentItem].classList.add("current-item");
    });
  });
  

};  




