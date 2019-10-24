import * as ActionTypes from "./ActionTypes";//alias import
//we have two things in ever reducer(state)
//initialize the state
//update the state per dispatched action

const INITIAL_STATE = {
    products: []
}

export default function productReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        
        case ActionTypes.GET_PRODUCTS_FULFILLED : //promise way instead of thunk
            console.log('action.payload ', action.payload)
            return {...state, products : action.payload}

        default: return state
    }
}