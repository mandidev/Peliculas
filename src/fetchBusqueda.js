const fetchBusqueda = () => {
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const year = document.getElementById('year').value || 2023;

    let url;
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/search/movie?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&region=US&sort_by=popularity.desc&include_adult=true&page=1&release_date.gte=${year}`;

    } else if (tipo === 'tv'){
        url = `https://api.themoviedb.org/3/search/tv?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&region=US&sort_by=popularity.desc&include_adult=true&page=1`;
    }
};

export default fetchBusqueda;