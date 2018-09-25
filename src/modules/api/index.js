import axios from 'axios';
import { handleError } from './handleError';
import store from '../../redux/store';

export default class Api {

    static createApi(options = {}) {
        let headers = {
            'Authorization': store.getState().auth.user && store.getState().auth.user.api_token || '',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Accept': options.Accept ? options.Accept : '*/*'
        };

        if (options.contentType) {
            headers['content-type'] = options.contentType;
        }

        return axios.create({baseURL: `${window.env.API_SERVER}`, headers})[options.method](options.url, options.data).catch(handleError)
    }

    static get(options) {
        return Api.createApi({...options, method: 'get'});
    }

    static post(options) {
        return Api.createApi({...options, method: 'post'});
    }

    static put(options) {
        return Api.createApi({...options, method: 'put'});
    }

    static delete(options) {
        return Api.createApi({...options, method: 'delete'});
    }

    static patch(options) {
        return Api.createApi({...options, method: 'patch'});
    }
}