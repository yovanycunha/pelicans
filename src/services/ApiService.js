import axios from 'axios';


async function getShowByTitle(name) {
    return await axios
        .get('&s=' + name)
        .then(result => {return result.data.Search})
    }

async function getShowById(imdbID) {
    return await axios
        .get('&plot=full&i=' + imdbID)
        .then(result => {return result.data;})
}


export {getShowByTitle, getShowById};
