'use strict'
import {getFilmes, postFilme, selectNameFilmes} from "./filmes.js"

console.table(await getFilmes())

import { getFilmesId } from "./filmes.js"

const search = new URLSearchParams(window.location.search).get('search')
const searchBar = document.getElementById('searchBar')
const container = document.getElementById('container')

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', pesquisar)
async function pesquisar(){
    const pesquisaFilme = await selectNameFilmes(searchBar.value)
    const listaFilmes = pesquisaFilme.nome
    apagarListaFilmes()

    listaFilmes.forEach(filme => {
        console.log(filme)
        criarCard(filme)
    });
}

searchBar.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        pesquisar()
    }
})
function apagarListaFilmes(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



function criarCard (filme){
    container.classList.add('gap-4')
    const card = document.createElement('div')
    card.classList.add('flex', 'flex-col','bg-white', 'rounded-lg', 'shadow-lg', 'p-6', 'mb-4', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'max-w-sm', 'mx-auto');
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('text-lg', 'font-bold', 'text-gray-900', 'mb-2', 'text-center');
    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add('w-72')
    const preco = document.createElement('p')
    preco.textContent = filme.valor_unitario
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('w-full', 'h-full', 'object-cover', 'rounded-lg', 'mb-2');
    const dataLancamento = document.createElement('p')
    dataLancamento.textContent = filme.data_lancamento
    card.append(capa, titulo)
    container.appendChild(card)
    card.addEventListener('click',()=> {
        window.location.href='../sobre.html?id='+filme.id
    })
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        criarCard(filme)
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
