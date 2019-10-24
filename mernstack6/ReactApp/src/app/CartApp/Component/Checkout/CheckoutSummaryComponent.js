import React from "react";
import {NavLink} from "react-router-dom";

export default function CheckoutSummary(props) {
    let {
        count,
        amount
        } = props;

    return (
        <div>
            <h2>Checkout Summary</h2>
            <p> Total: ${amount} </p>
            <p> Count: {count} </p>
            <NavLink to="/payment" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Go To Payment  </NavLink>                                    
        </div>
    )
}