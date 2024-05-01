export async function getListarAtores(){
    const url = 'http://localhost:8080/v1/acmeFilmes/atores'
    const response = await fetch(url)
    const data = await response.json()
    return data.ator
}

export async function getBuscarAtorID(id){
    const url = `http://localhost:8080/v2/acmeFilmes/ator/${id}`
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);
    return data.ator[0]
}

// export async function selectNameFilmes(nome){
//     const url = `http://localhost:8080/v2/acmeFilmes/Filmes/Filtro?nome=${nome}`
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }


export async function postDiretor(diretor){
    const url = 'http://localhost:8080/v2/acmeFilmes/diretor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }

    const response = await fetch(url, options)

    return response.ok
}




// export async function putFilme(id, filme){
//     const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(filme)
//     }

//     const response = await fetch(url, options)

//     return response.ok
// }




export async function deleteAtor(id){
    try{
        await fetch(`http://localhost:8080/v2/acmeFilmes/ator/${id}`,{
            method: 'DELETE'
        })
        console.log("Diretor excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir diretor: ',error);
    }
}
