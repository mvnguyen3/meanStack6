import React from "react";

export default function PaymentSummary(props){
    let{
        count,
        amount
    } = props;

    return (
        <div>
            <p>You've bought {count} items</p>
            <p>And your <b>total</b>  is: ${amount}</p>
            <h2>Thank You For Shopping At SynergisticIt Solutions</h2>
        </div>
    )
}