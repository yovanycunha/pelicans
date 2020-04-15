import axios from 'axios';


async function getData(name) {
    return await axios
        .get('&s=' + name)
        .then((result) => {
            return result.data.Search
        })
    }


export {getData};
