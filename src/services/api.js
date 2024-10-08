import axios from 'axios';

// Base URL: https://api.themoviedb.org/3/
// URL: /movie/now_playing?api_key=135fef96c7de1b86e0ac8f15d7cc0422&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;