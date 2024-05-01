'use strict';
import { getListarAtores, deleteAtor } from "./ator.js";

const listaAtores = await getListarAtores();
const container = document.getElementById('container');

function criarDiretor(info) {
    const ator = document.createElement('div');
    ator.classList.add('p-4', 'bg-gray-800', 'border-2', 'border-white', 'grid', 'grid-cols-3', 'items-center', 'rounded-lg', 'mx-16');
    
    const id = document.createElement('h1');
    id.classList.add('text-white', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_ator;
    
    const produto = document.createElement('p');
    produto.textContent = info.nome;
    produto.classList.add('text-white', 'text-2xl');
    
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');
    
    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx', 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');
    
    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');
    
    icones.append(iconeEditar, iconeDeletar);
    ator.append(id, produto, icones);
    container.appendChild(ator);
    
    iconeEditar.addEventListener('click', () => {
        window.location.href = '../editarAtor.html?id=' + info.id_ator;
    });
    
    iconeDeletar.addEventListener('click', () => {
        deleteAtor(info.id_ator);
        window.location.reload();
    });
}

const add = document.getElementById('add');

add.addEventListener('click', () => {
    window.location.href = '../cadastroDiretor.html';
});

listaAtores.forEach(ator => {
    criarDiretor(ator);
});
