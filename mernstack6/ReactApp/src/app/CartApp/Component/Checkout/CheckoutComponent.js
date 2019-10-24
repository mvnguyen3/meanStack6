import React from "react";
import CheckoutList from "../../Container/Checkout/CheckoutListContainer"
import CheckoutSummary from "../../Container/Checkout/CheckoutSummaryContainer"

export default function CheckoutComponent(props) {
    let{
        user
    } = props;
    return(
        <div>
            <h2>Welcome to checkout!</h2>
            <p>Name: {user.user.firstName}</p>
            <p>Street: {user.user.street}</p>
            <p>Mobile: {user.user.cellPhone}</p>
            <CheckoutList/>
            <CheckoutSummary/>
        </div>
    )
}