'use strict'
import {getListarDiretores} from "./diretor.js"

console.table( getListarDiretores())


// const search = new URLSearchParams(window.location.search).get('search')
// const searchBar = document.getElementById('searchBar')
const container = document.getElementById('container')

// const searchButton = document.getElementById('searchButton')
// searchButton.addEventListener('click', pesquisar)
// async function pesquisar(){
//     const pesquisaFilme = await selectNameFilmes(searchBar.value)
//     const listaFilmes = pesquisaFilme.nome
//     apagarListaFilmes()

//     listaFilmes.forEach(filme => {
//         console.log(filme)
//         criarCard(filme)
//     });
// }

// searchBar.addEventListener('keypress', (event)=>{
//     if(event.key === "Enter"){
//         pesquisar()
//     }
// })
// function apagarListaFilmes(){
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
// }



function criarCard (diretor){
    container.classList.add('gap-4')
    const card = document.createElement('div')
    card.classList.add('flex', 'flex-col','bg-white', 'rounded-lg', 'shadow-lg', 'p-6', 'mb-4', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'max-w-sm', 'mx-auto');
    const nome = document.createElement('h2')
    nome.textContent = diretor.nome
    nome.classList.add('text-lg', 'font-bold', 'text-gray-900', 'mb-2', 'text-center');
    const texto = document.createElement('p')
    texto.textContent = diretor.data_nascimento
    texto.classList.add('w-72')
    const dataFalecimento = document.createElement('p')
    dataFalecimento.textContent = diretor.data_falecimento;

    const foto = document.createElement('img')
    foto.src = diretor.foto
    foto.classList.add('w-full', 'h-full', 'object-cover', 'rounded-lg', 'mb-2');
    const biografia = document.createElement('p')
    biografia.textContent = diretor.biografia
    card.append(foto, nome)
    container.appendChild(card)
    card.addEventListener('click',()=> {
        window.location.href='./sobreDiretor.html?id='+diretor.id_diretor
    })
}

async function preencherContainer(){
    const containerDiretor = document.querySelector('body')

    const diretor = await getListarDiretores();


    diretor.forEach(diretor => {
        criarCard(diretor)
    })
}

// const input = document.getElementById('input')

// input.addEventListener('keyup', async(nome)=>{
//     if(input == nome){
//         const nomeFilme = await selectNameFilmes()
//          nomeFilme = preencherContainer()
//     }
// })



preencherContainer()
