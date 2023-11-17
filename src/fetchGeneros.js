const fetchGeneros = async() => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5e0fe0122bea533a17eade33e2cae17d&lenguage=es-ES'

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.genres;
    } catch(e){
        console.log(e);
    };
};

export default fetchGeneros