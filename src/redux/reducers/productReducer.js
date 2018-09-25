import { productConstants } from '../types';

const initialState = {
    all: [],
    inCards: localStorage.productInCard ? JSON.parse(localStorage.productInCard) : []
};

export default function (state = initialState, action) {
	switch (action.type) {
        case productConstants.RECEIVE_PRODUCTS:
            return {
				...state,
				all: action.payload
			};
		case productConstants.ADD_TO_CARD:
            return {
				...state,
				inCards: action.payload
			};
        default:
            return state;
    }
};