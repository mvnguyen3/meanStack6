import React from "react";

export default function CheckoutList(props) {
    let {
        items
        }  = props; // item is equal to state.cart

    return (
        <div>
            <h2>Checkout List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.qty}</td>
                                <td> ${item.price * item.qty} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}