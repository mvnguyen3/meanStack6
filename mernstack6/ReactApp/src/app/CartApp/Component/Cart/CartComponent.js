import React from "react";
import CartList from "../../Container/Cart/CartListContainer";
import CartSummary from "../../Container/Cart/CartSummaryContainer";


export default function CartComponent(props){    

    return(
        <div>
            <h2>Shopping Cart Using Redux</h2>
            <p>Cart Length {props.cartLength}</p>  
            
            <button onClick={props.addItemFunc} >
                Add Item
            </button>

          


            <button onClick={props.empty} >
                Empty
            </button>
            <CartList/>
            <CartSummary/>

            {/* <button onClick={() => props.saveCartItems(props.items, props.userid)} >
                Save For Checkout
            </button> */}
                                         
        </div>
    )    
}