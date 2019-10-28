import React from "react";
import CartItem from "../../container/Cart/CartItemContainer";

export default function CartList(props) { 
    let {
        
        items
        
    } = props;

    console.log("Current items " + items);
    var token = reDefine(items);

    function reDefine(items){
        let token = "";
        for(let item of items){
            token = item.tokens; // Get the token value from item object
        }
        return {
            token
        };
    }
    
    var tokenExist = typeof token.token == "undefined";
    
    
    return (
        <div> 
        <h2>Cart List</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>                
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>                   
                    <th>Remove</th>
                </tr>
            </thead>
             <tbody>    
            {   
             items.map (item => (
                 <CartItem item={item}
                           key={item.id}
                 />
             ))
            }
            </tbody>

           
        </table>
        </div>
     )
}