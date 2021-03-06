const itemsReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default itemsReducer