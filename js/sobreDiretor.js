'use strict'

import {getBuscarDiretorID} from "./diretor.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoDiretor = await getBuscarDiretorID(indice)
console.log(infoDiretor)

    function preencherCampos(diretor){
        const nome = document.getElementById('nome')
        nome.textContent = diretor.nome
        const poster = document.getElementById('foto')
        poster.src = diretor.foto
        const biografia = document.getElementById('biografia')
        const nascimento = document.getElementById('nascimento')
        nascimento.textContent = "NASCIMENTO: "+tratarData(diretor.data_nascimento)
        const falecimento = document.getElementById('falecimento')
        if(diretor.falecimento){
           falecimento.textContent = "FALECIMENTO: "+tratarData(diretor.data_falecimento)
        } else {
            falecimento.textContent = "FALECIMENTO: Ainda vivo"
        } 
        biografia.textContent = diretor.biografia
    }

    function tratarData(string){
        let dataTratada = string.slice(0,10)
        dataTratada = dataTratada.split('-')
        dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
        return dataTratada
    }

    preencherCampos(infoDiretor)














