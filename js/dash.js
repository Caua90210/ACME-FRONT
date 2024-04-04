'use strict';
import { getFilmes, deleteFilme } from "./filmes.js";

const listaFilme = await getFilmes();
const container = document.getElementById('container');

function criarFilme(info) {
    const filme = document.createElement('div');
    filme.classList.add('p-4', 'bg-gray-800', 'border-2', 'border-white', 'grid', 'grid-cols-4', 'items-center', 'rounded-lg', 'mx-16');
    
    const id = document.createElement('h1');
    id.classList.add('text-white', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id;
    
    const produto = document.createElement('p');
    produto.textContent = info.nome;
    produto.classList.add('text-white', 'text-2xl');
    
    const valor = document.createElement('p');
    valor.textContent = 'R$' + info.valor_unitario;
    valor.classList.add('text-white', 'text-2xl', 'ml-10');
    
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');
    
    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx', 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');
    
    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');
    
    icones.append(iconeEditar, iconeDeletar);
    filme.append(id, produto, valor, icones);
    container.appendChild(filme);
    
    iconeEditar.addEventListener('click', () => {
        window.location.href = '../editar.html?id=' + info.id;
    });
    
    iconeDeletar.addEventListener('click', () => {
        deleteFilme(info.id);
        window.location.reload();
    });
}

const add = document.getElementById('add');

add.addEventListener('click', () => {
    window.location.href = '../cadastro.html';
});

listaFilme.forEach(filme => {
    criarFilme(filme);
});
