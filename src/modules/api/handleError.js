import { logOut } from '../../redux/actions/authActions';
import store from '../../redux/store';

export const handleError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Response',error.response);
        switch (error.response.status) {
            case 401:
                console.log('401');
                //store.dispatch(logOut());
                throw error;
            case 403:
                console.log('403');
                throw error;
            case 404:
                console.log('404');
                throw error;
            default:
                console.log('500');
                throw error;
        }
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Request',error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Message', error.message);
    }
    console.log('Config', error.config);
};