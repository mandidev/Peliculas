import fetchBusqueda from "./fetchBusqueda";

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', (e) => {
    fetchBusqueda()
});