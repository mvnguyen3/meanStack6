import * as ActionTypes from "./ActionTypes";//alias import
//we have two things in ever reducer(state)
//initialize the state
//update the state per dispatched action

const INITIAL_STATE = {
    user2: {
        firstName: "",
        lastName: "",
        age: 0,
        hobby: "",
        _id:""
    }
}

export default function user2Reducer(state=INITIAL_STATE, action) {
    
    switch(action.type) {//""
        case ActionTypes.ADDUSER_USER2: 
            console.log("Payload Address", action.payload.user2)
            return {...state, user2: action.payload.user2}//...state : {user: {}, loading:true, user2:{}}
        
        default:
            return state
    }

}