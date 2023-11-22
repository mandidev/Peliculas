import cargarGeneros from "./cargarGeneros";
import fetchPopulares from "./fetchPopulares";
import cargarTitulo from "./cargarTitulos";

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