import axios from "axios";


export const setProducts = () => async (dispatch) => {
    // const response = await axios.get("/products");
    // dispatch({
    //     type: "SET_PRODUCTS",
    //     payload: response.data
    // });
}

export const setAProduct = (productID) => async (dispatch) => {
    const response = await axios.get(`/products/${productID}`);
    dispatch({
        type: "SET_SINGLE_PRODUCT",
        payload: response.data
    });
}

export const removeSeletedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT"
    }
}