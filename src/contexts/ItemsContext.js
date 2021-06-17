import axios from "axios"
import { createContext, useReducer } from "react"
import itemsReducer from "../reducers/itemsReducer"

export const ItemsContext = createContext()

const initialState = {
    loading: true,
    items: [],
    error: null
}

const ItemsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState)

    // action fetch data
    const getAllItems = async () => {
        const { data } = await axios.get("https://my-pointofsales-api.herokuapp.com/api/items")
        dispatch({ type: "GET_DATA", payload: data })
    }
    return (
        <ItemsContext.Provider value={{ items: state.items, loading: state.loading, error: state.error, getAllItems }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider