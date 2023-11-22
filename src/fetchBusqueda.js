import obtenerGenero from "./obtenerGenero";
import fetchGeneros from "./fetchGeneros";

const fetchBusqueda = async(pagina = 1) => {
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const year = document.getElementById('year').value || 2023;

    let url;
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&region=US&sort_by=popularity.desc&include_adult=true&page=${pagina}&primary_release_year=${year}&with_genres=${idGenero}`;

    } else if (tipo === 'tv'){
        url = `https://api.themoviedb.org/3/discover/tv?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&region=US&sort_by=popularity.desc&include_adult=true&page=${pagina}&first_air_date.lte=${year}`;
    }

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;
        const generos = await fetchGeneros();
        
        resultados.forEach( (resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos)
            
        });

        return resultados;
    } catch(e) {
        console.log(e);
    }
};

export default fetchBusqueda;