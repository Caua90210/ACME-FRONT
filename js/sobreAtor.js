'use strict'

import {getBuscarAtorID} from "./ator.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoAtor = await getBuscarAtorID(indice)
console.log(infoAtor)

    function preencherCampos(ator){
        const nome = document.getElementById('nome')
        nome.textContent = ator.nome
        const poster = document.getElementById('foto')
        poster.src = ator.foto
        const biografia = document.getElementById('biografia')
        const nascimento = document.getElementById('nascimento')
        nascimento.textContent = "NASCIMENTO: "+tratarData(ator.data_nascimento)
        const falecimento = document.getElementById('falecimento')
        if(ator.falecimento){
           falecimento.textContent = "FALECIMENTO: "+tratarData(ator.data_falecimento)
        } else {
            falecimento.textContent = "FALECIMENTO: Ainda vivo"
        } 
        biografia.textContent = ator.biografia
    }

    function tratarData(string){
        let dataTratada = string.slice(0,10)
        dataTratada = dataTratada.split('-')
        dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
        return dataTratada
    }

    preencherCampos(infoAtor)














