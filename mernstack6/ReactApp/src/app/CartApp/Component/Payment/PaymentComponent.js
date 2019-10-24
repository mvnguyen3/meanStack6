import React from 'react';
import PaymentSummary from '../../Container/Payment/PaymentSummaryContainer';

export default function PaymentComponent(props){
    let{
        user
    } = props;

    return(
        <div>
            <h2> Hi <b>{user.user.firstName}</b> below is your payment details</h2>
            <PaymentSummary/>
        </div>
    )
}