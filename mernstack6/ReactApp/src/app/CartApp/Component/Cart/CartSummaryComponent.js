import React from "react";

export default function CartSummary(props) {
    let {
        count,
        amount
    } = props;

    return (
        <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}