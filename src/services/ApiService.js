import axios from 'axios';

export default {
    fetchShowsGeneric(name) {
        return axios.get('&s=' + name)
        .then(response => {
            console.log(response);
            return response
        })
    }
}