export async function getListarDiretores(){
    const url = 'http://localhost:8080/v1/acmeFilmes/diretores'
    const response = await fetch(url)
    const data = await response.json()
    return data.diretor
}

export async function getBuscarDiretorID(id){
    const url = `http://localhost:8080/v1/acmeFilmes/diretor/${id}`
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);
    return data.diretor[0]
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




export async function deleteDiretor(id){
    try{
        await fetch(`/v2/acmeFilmes/diretor/${id}`,{
            method: 'DELETE'
        })
        console.log("Diretor excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir diretor: ',error);
    }
}
