// console.log(dados);

function Search(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for string sem nada 
    if(!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Digite algo no campo de busca</p>"  
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

//Variavel vazia
let resultados ="";
let titulo ="";
let descricao = "";
let tags = "";

//Para cada dado  dentro da lista de dados:
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    titulo = dado.descricao.toLowerCase()
    titulo = dado.tags.toLowerCase()

    //Se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento        
    resultados += `
    <div class="item-resultado">
        <h2> 
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href= ${dado.link} target="_blank"> Ler mais.</a>
    </div>
    `
        }
    }

    if(!resultados) {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>" 
        return
    }
//inserindo todos os itens armazenados na variável resultados após o for, no site
section.innerHTML = resultados
}

