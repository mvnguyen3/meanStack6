import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api

import user from "./app/CartApp/State/UserReducer";
import user2 from "./app/CartApp/State/User2Reducer";
import product from "./app/CartApp/State/ProductReducer";
import cart from "./app/CartApp/State/CartReducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers(
        {
            user,
            user2,
            product,
            cart,
        }),//we need to combine multiple reducers
    {},
    applyMiddleware(myLogger, promise, thunk)    
)