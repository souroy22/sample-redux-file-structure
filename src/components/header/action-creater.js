


export const searchProducts = (key, products) => async (dispatch) => {
    const filteredResult = products.filter(product => product.title.toLowerCase().includes(key.toLowerCase()));
    dispatch({
        type: 'SET_SEARCHED_PRODUCTS',
        payload: filteredResult
    })
}