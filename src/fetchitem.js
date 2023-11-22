const fetchItem = async(id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    
    try {
        const url =`https://api.themoviedb.org/3/${tipo}/${id}?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es-MX`;

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        return datos;
    } catch(e) {
        console.log(e);
    }
};

export default fetchItem;