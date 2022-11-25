import axios from "axios";
export { fetchMovies };

const baseURL = axios.defaults.baseURL = 'http://img.omdbapi.com/?apikey=';
const KEY = 'apikey=e0a38480';

async function fetchMovies(q) {
    const response = await axios.get(
        `http://www.omdbapi.com/?s=${q}&${KEY}`
    );
    return response;
}