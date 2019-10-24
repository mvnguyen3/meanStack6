import React from "react";
import ProductDetails from "./ProductDetailsComponent";

export default class Product extends React.Component{

    componentDidMount() {
        this.props.fetchProducts();
    }

    render(){
        let products = this.props.products || [];
        console.log("products :" , products);
        return(
            <div>
                <h2>Product List {this.props.loading ? "Loading " : " Loaded "}</h2>
                <ul>
                {
                    products.map (product => (
                        <ProductDetails key={product.id} product={product}/>                        
                    ))
                }
                </ul>
            </div>
        )
    }
    
}