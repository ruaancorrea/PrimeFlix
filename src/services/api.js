import axios from "axios";


// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=cc54e814f0a9765db43bda03242fa7fe&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;


