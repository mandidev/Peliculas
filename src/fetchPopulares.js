import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";


const fetchPopulares = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&page=1`

    try {
        const response = await fetch(url);
        const data = await response.json();
        const resultados = data.results;
        const generos = await fetchGeneros();

        resultados.forEach( (resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos)
            
        });
        return resultados;
    } catch(e){
        console.log(e);
    }
};

export default fetchPopulares;