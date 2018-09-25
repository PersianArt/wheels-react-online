import { productConstants } from '../types';
import ProductsAPI from '../../modules/api/products-api.js';

export const receiveProducts = () => dispatch => {
	return dispatch({
		type: productConstants.RECEIVE_PRODUCTS,
		payload: ProductsAPI.products
	});
};

export const addToCard = (products) => dispatch => {
	return dispatch({
        type: productConstants.ADD_TO_CARD,
        payload: products
	});
};

