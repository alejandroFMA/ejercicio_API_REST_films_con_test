const fetch = require('node-fetch');
require("dotenv").config();

async function fetchFilm (title) {
    const apikey = process.env.API_KEY;
    const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${title}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            return null;
        }

        data.title = data.Title;
        return data;
        
    } catch (error) {
        console.error(`ERROR: ${error.stack}`);
        throw error; // Lanza el error para manejarlo en las rutas.
    }
}

module.exports = {fetchFilm};
