import * as ActionTypes from "./ActionTypes"; // alias import

// const INITIAL_STATE  = {
//     products: {
//         productName: "",
//         pDescription: "",
//         pPrice: 0,
//         pRating: ""
//     },
//     loading: false
// }

const INITIAL_STATE = [];



// export default function addProductReducer(state=INITIAL_STATE, action){
//     switch(action.type){
//         case ActionTypes.ADD_PRODUCTS:
//             console.log("Payload Address",  action.payload.products);
//             return {...state, products: action.payload.products}
//         default:
//             return state;
//     }
// }

export default function addProductReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ActionTypes.ADD_PRODUCTS:
            console.log("Payload Address",  action.payload.products);
            return [...state, action.payload.products]
        default:
            return state;
    }
}





