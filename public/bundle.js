'use strict';

const fetchGeneros = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    
    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es`;

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

const fetchPopulares = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX&page=1`;

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
    contenedor.innerHTML = '';
    
    resultados.forEach( (resultado) => {
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

const contenedorGeneros = document.getElementById('filtro-generos');

const cargarGeneros = async(filtro) => {
    const generos = await fetchGeneros(filtro);
    contenedorGeneros.innerHTML = '';

    generos.forEach( (genero) => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = genero.name;
        btn.setAttribute('data-id', genero.id);
        contenedorGeneros.appendChild(btn);
    });
};

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');



filtroPelicula.addEventListener('click', async(e) => {
    e.preventDefault();
    cargarGeneros('movie');
    const resultados = await fetchPopulares('movie');
    cargarTitulo(resultados);
    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Peliculas Populares';
});



filtroShow.addEventListener('click', async(e) => {
    e.preventDefault();

    cargarGeneros('tv');

    const resultados = await fetchPopulares('tv');

    cargarTitulo(resultados);
    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Series Populares';
});

const contenedor = document.getElementById('filtro-generos');

contenedor.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('button')) {
        contenedor.querySelector('.btn--active')?.classList.remove('btn--active');

        e.target.classList.add('btn--active');
    }
});

const fetchBusqueda = () => {
    document.querySelector('.main__filtros .btn--active')?.id;
    document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    document.getElementById('year').value || 2023;
};

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', (e) => {
    fetchBusqueda();
});

const cargar = async() => {
    const resultados = await fetchPopulares('movie');
    cargarTitulo(resultados);
    cargarGeneros('movie');

};

cargar();
//# sourceMappingURL=bundle.js.map
