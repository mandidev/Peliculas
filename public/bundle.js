'use strict';

const fetchGeneros = async() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5e0fe0122bea533a17eade33e2cae17d&lenguage=es-ES';

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.genres;
    } catch(e){
        console.log(e);
    }};

const obtenerGenero = (id, generos) => {
    let nombre;

    generos.forEach( (elemento) => {
        try {
            if(id === elemento.id){
                nombre = elemento.name;
            };
        } catch {
            nombre = 'error 404';
        }
    });
    return nombre;
};

const fetchPopulares = async() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=5e0fe0122bea533a17eade33e2cae17d&lenguage=es-ES&page=1';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const resultados = data.results;
        const generos = await fetchGeneros();

        resultados.forEach( (resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
            
        });
        return resultados;
    } catch(e){
        console.log(e);
    }
};

const cargarTitulo = (resultados) => {    
    const contenedor = document.querySelector('#populares .main__grid');
    
    resultados.forEach( (resultado) => {
        console.log(resultado);
        const plantilla = `
            <div class="main__media">
                <a href="#" class="main__media-thumb">
                    <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
                </a>
                <p class="main__media-titulo">${resultado.title}</p>
                <p class="main__media-fecha">${resultado.genero}</p>
            </div>
        `;

        contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
};

const cargar = async() => {
    const resultados = await fetchPopulares();
    cargarTitulo(resultados);
};

cargar();
//# sourceMappingURL=bundle.js.map
