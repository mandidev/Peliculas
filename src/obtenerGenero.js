const obtenerGenero = (id, generos) => {
    let nombre;

    generos.forEach( (elemento) => {
        try {
            if(id === elemento.id){
                nombre = elemento.name;
            };
        } catch {
            nombre = 'error 404'
        }
    });
    return nombre;
};

export default obtenerGenero;