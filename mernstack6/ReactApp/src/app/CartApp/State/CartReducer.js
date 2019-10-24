import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = [];

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log("cart Reducer", state, action);
    switch(action.type) {
        case ActionTypes.ADD_ITEM:
            return [...state, action.payload.item]  

        case ActionTypes.EMPTY_CART:
                return []

        case ActionTypes.UPDATE_ITEM:
                return state.map (item => {
                    if (item.id != action.payload.id)
                        return item;                
                    // item to update
                    return {...item, qty: action.payload.qty}
                })

        case ActionTypes.REMOVE_ITEM: 
            return state.filter(item => item.id != action.payload.id)

        default:
            return state;
    }
}