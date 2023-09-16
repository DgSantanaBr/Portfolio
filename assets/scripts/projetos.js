// Requisição  JSON //
let projetos = []

const endPointApi = './assets/json/data.json'

getBuscarProjetoDaAPI()

async function getBuscarProjetoDaAPI() {
  const resp = await fetch(endPointApi)
  projetos = await resp.json()

  exibirProjetos(projetos)
};
// Função para inserir as tags do corpo HTML e exibir a resposta do JSON.//

function exibirProjetos(listaDeProjetos) {

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

  //Função para verificar tamanho da lista de projetos no JSON e inseri-los na galeria.//
  listaDeProjetos.forEach(projetos => {
    const elementoInsereProjeto = document.getElementById('galeria');
    elementoInsereProjeto.innerHTML +=
      `
   <div class= "item current-item">
        <img src="${projetos.imagem}" class="imagem-projeto current-imagem" alt="Imagem-projeto"/>
        <h2>${projetos.nome}</h2>
        
        <details class ="descricaoPorjeto">
          <summary>Detalhes</summary>
          <p>${projetos.descricao}</p>
        </details>

        <button class ="btProjeto custom-btn">
          <a href="${projetos.SaibaMais}" target="_blank" alt="Link-projeto" > Visitar</a>
        </button>    
    
</div>
  `
  });

  // Galeria em slide carousel através das Arrows//
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".item");

  const maxItems = items.length;
  items.forEach((item) => item.classList.remove("current-item"));

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const isLeft = control.classList.contains("arrow-left");

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

      // Remove o destaque de todos os projetos//
      items.forEach((item) => item.classList.remove("current-item"));

      items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"

      });

      //Destaca o projeto//
      items[currentItem].classList.add("current-item");


    });
  });


};