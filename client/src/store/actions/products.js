import { FETCH_PRODUCTS, FILTER_SORT, FILTER_ZISE } from "./types";

export const fetchProducts = () => {
    return (dispatch) => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    data: data,
                });
            });
    };
};
export const filteredSize = (products, value) => {
    return (dispatch) => {
        let clonedproducts = [...products];
        let newproducts = clonedproducts.filter(
            (p) => p.sizes.indexOf(value) != -1
        );
        dispatch({
            type: FILTER_ZISE,
            data: {
                size: value,
                products: value == "ALL" ? products : newproducts,
            },
        });
    };
};
export const filteredSort = (products, value) => {
    return (dispatch) => {
        let clonedproducts = [...products];

        let newproducts = clonedproducts.sort(function(a, b) {
            if (value == "lowest") {
                return a.price - b.price;
            } else if (value == "highest") {
                return b.price - a.price;
            } else {
                return a.id < b.id ? 1 : -1;
            }
        });
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newproducts,
            },
        });
    };
};