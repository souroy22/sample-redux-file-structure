const initialState = {
    searchedProducts: []
}

// destructure type and payload from action object
export const searchProductReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_SEARCHED_PRODUCTS":
            return {...state, searchedProducts: payload};
            
        default:
            return state;
    }
}