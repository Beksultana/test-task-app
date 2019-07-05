import axios from 'axios';

const pokemonApi = axios.create({
    baseURL: "http://demo.sibers.com"
});

export default pokemonApi;