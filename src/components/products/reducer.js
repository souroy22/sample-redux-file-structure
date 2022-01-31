const initialState = {
    products: [],
    selectedProduct: {}
}

// destructure type and payload from action object
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_PRODUCTS":
            return {...state, products: payload};

        case "SET_SINGLE_PRODUCT":
            return {...state, selectedProduct: payload};
        
        case "REMOVE_SELECTED_PRODUCT":
            return {...state, selectedProduct: {}};
            
        default:
            return state;
    }
}