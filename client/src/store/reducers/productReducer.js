import { FETCH_PRODUCTS, FILTER_order, FILTER_ZISE } from "../actions/types";

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { products: action.data, filterProducts: action.data };

        case FILTER_ZISE:
            return {
                ...state,
                size: action.data.size,
                filterProducts: action.data.products,
            };
        case FILTER_order:
            return {
                ...state,
                order: action.data.order,
                filterProducts: action.data.products,
            };
        default:
            return { state };
    }
};