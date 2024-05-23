export async function getFilmes(){
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.filmes
}

export async function getFilmesId(id){
    const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes[0]
}

export async function selectNameFilmes(nome){
    const url = `http://localhost:8080/v2/acmeFilmes/Filmes/Filtro?nome=${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}


export async function postFilme(filme){
    const url = 'http://localhost:8080/v2/acmeFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putFilme(id, filme) {
    const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    };

    try {
        const response = await fetch(url, options);
        console.log('URL:', url);
        console.log('Options:', options);
        console.log('Response Status:', response.status);
        const responseData = await response.json();
        console.log('Response Data:', responseData);
        return response.ok;
    } catch (error) {
        console.error('Erro ao fazer a requisição PUT:', error);
        return false;
    }
}


export async function deleteFilme(id){
    try{
        await fetch(`http://localhost:8080/v2/acmeFilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Filme excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}
