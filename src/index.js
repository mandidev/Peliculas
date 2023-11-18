import fetchPopulares from "./fetchPopulares";
import cargarTitulo from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
import './listenerFiltroTipo';

const cargar = async() => {
    const resultados = await fetchPopulares('movie');
    cargarTitulo(resultados);
    cargarGeneros('movie')

}

cargar()