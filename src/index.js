import fetchPopulares from "./fetchPopulares";
import cargarTitulo from "./cargarTitulos";

const cargar = async() => {
    const resultados = await fetchPopulares();
    cargarTitulo(resultados);
}

cargar()

