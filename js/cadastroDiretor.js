'use strict'
import { postDiretor } from "./diretor.js"


// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const biografia = document.getElementById('biografia')
const nascimento = document.getElementById('nascimento')
const falecimento = document.getElementById('falecimento')
const cadastrar = document.getElementById('cadastrar')
const poster = document.getElementById('poster')
const sexo = document.getElementById('sexo')

cadastrar.addEventListener('click', ()=>{

    const nomeInput = nome.value
    const biografiaInput = biografia.value
    const nascimentoInput = nascimento.value
    const falecimentoInput = falecimento.value
    const capaInput = poster.src
    const sexoInput = sexo.value
    const insert ={
        nome: nomeInput,
        biografia: biografiaInput,
        data_nascimento: nascimentoInput,
        data_falecimento: falecimentoInput,
        foto: capaInput,
        id_sexo: sexoInput
    }

    postDiretor(insert)
    console.log(insert)
    window.location.href = './dashboardDiretor.html'
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})


