const fetchGeneros = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    
    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=5e0fe0122bea533a17eade33e2cae17d&language=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.genres;
    } catch(e){
        console.log(e);
    };
};

export default fetchGeneros