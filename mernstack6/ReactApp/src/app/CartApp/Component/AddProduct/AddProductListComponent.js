import React from 'react';

export default function AddProductList(props){
    let {
        products,
    } = props
    return(
            <div>
                    <h2>Product List</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description </th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                       
                        <tbody>
                            {
                                products.map(product =>(
                                    <tr>                              
                                        <td>{product.productName}</td>
                                        <td>{product.pDescription}</td>
                                        <td>${product.pPrice}</td>
                                        <td>{product.pRating} stars</td>
                                    </tr>
                                ))
                            }     
                        </tbody>
                    </table>
            </div>
        )
}
