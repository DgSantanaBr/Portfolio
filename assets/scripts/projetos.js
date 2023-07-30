let projetos = []

const endPointApi = '/assets/json/data.json'

getBuscarProjetoDaAPI()

const elementoInsereProjeto = document.getElementById('container-projetos')
elementoInsereProjeto.innerHTML = `      <button class="arrow-left-control flecha" aria-label="Previous image">◀</button>
<button class="arrow-right-control flecha" aria-label="Next image">▶</button>`


async function getBuscarProjetoDaAPI() {
  const resp = await fetch(endPointApi)
  projetos = await resp.json()

  exibirProjetos(projetos)
}

function exibirProjetos(listaDeProjetos) {

  listaDeProjetos.forEach(projetos => {
    elementoInsereProjeto.innerHTML += 
    `     
        <div class="projetos-wrapper">
          <div class="galeria-de-projetos">
      
            <img src="${projetos.imagem}" class="imagem-projeto" alt="Imagem-projeto"/>
            <h2>${projetos.nome}</h2>
            <button>
            <a href="${projetos.SaibaMais}" target="_blank" alt="Link-projeto" > Visite o projeto</a>
    
        </div>
      </div>  
  `

  });

}





