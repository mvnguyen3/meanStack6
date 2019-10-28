import * as ActionTypes from "./ActionTypes";//alias import

export const addUser = (user) => ({        
    type: ActionTypes.ADDUSER_USER,
    payload: {
        user
    }
})

export const loading = (loading) => ({
    type: "LOADING",
    payload: {
        loading
    }
});
export const signInUpUser = (user) => {
    console.log('entering signin signup user');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUser(user);
            dispatch(action);
            dispatch(loading(false));
            //dispatch(getCartItems(userresp._id))
        }) 
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}

//dispatching to product reducer using promise
export const GetProducts = (products) => ({    
    type : ActionTypes.GET_PRODUCTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/products", {
                    method: 'GET'
                }
                ).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(json => {
                    resolve(json)
                })
                .catch(error => {
                    reject(error);                     
                })
            })
        }       
});

//functions of cart component
export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
})


export const empty = () => ({
    type: ActionTypes.EMPTY_CART
    
})

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
})

export const saveCartItems = (Items, userid) => {
    console.log("Items To Be Saved", Items);   

    window.fetch("http://localhost:9090/api/saveUserCart",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:userid, items:Items})})
    .then (response => response.json())
    .then (cartresponse => {
        console.log("response ", cartresponse);
        dispatch(loading(false));
    })
    .catch((err)=>{
        console.log("Error While Login", err)
    })        
}




export const getCartItems = (userid) => {
    return function(dispatch, getState) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9090/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (cartresponse => {
            console.log("response ", cartresponse);
            for (const item of cartresponse.cart) {
                console.log("item in for of", item);
                let action = addItem(item);
                dispatch(action);    
            }
            
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }   
}


//******** Add Product ************

export const addProductDispatch = (products) => ({        
    type: ActionTypes.ADD_PRODUCTS,
    payload: {
        products
    }
})

export const saveProducts = (products) => {
    console.log("Welcome to Save Products from Actions.js")
    console.log("adding to MongoDB",  products);

    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/addProducts",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (productresp => {
            console.log("response ", productresp);
            let action = addProductDispatch(products); // **** important line ****
            dispatch(action);
            dispatch(loading(false));
            
           // dispatch(getCartItems(productresp._id))
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }

}