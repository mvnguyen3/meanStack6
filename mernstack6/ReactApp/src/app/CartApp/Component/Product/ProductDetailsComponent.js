import React from "react";

export default class ProductDetails extends React.Component {

    constructor(props){
        super(props);
        // get the product from store
        this.state = {
            product:this.props.product,
            showDetails:false,
            btnAddCart: 'Add',
            addItem:this.props.addItemFun

        }
    }

    
    showProductDetails = ()=>{
        this.setState({
            showDetails:!this.state.showDetails
        })
    }

    // Change the text on add to cart Btn
    btnAddMeth = () =>{
        if(this.state.btnAddCart == 'Add'){
            this.setState({
                btnAddCart: 'Added To cart'
            })

            // Add item to cart 
            // Working on ...
            this.state.addItem = this.props.addItemFun;

            alert('Added ' + this.state.product.productName + ' To Cart'); 

                       
        }else{
            alert('Product is already added!!');
           
        }
    }


    render(){
        return(
            <React.Fragment>
                <li className={"productDetail"} onClick={this.showProductDetails}>
                    {this.state.product.productName}
                    {this.state.showDetails ?
                    <ul className={"productdetailSubitems"}>
                        <li>Description: {this.state.product.pDescription}</li>
                        <li>Price: ${this.state.product.pPrice}</li>
                        <li>Rate: {this.state.product.pRating} stars</li>      
                        <button onClick={this.btnAddMeth}>{this.state.btnAddCart}</button>      
                        <button onClick={this.state.addItem}>TEST</button>           
                    </ul>
                                                                 
                    :
                    ""}
                </li>
            </React.Fragment>
        )
    }
}