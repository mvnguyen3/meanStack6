import React from "react";

export default class ProductDetails extends React.Component {

    constructor(props){
        super(props);
        // get the product from store
        this.state = {
            product:this.props.product,
            showDetails:false,
            btnAddCart: 'Add To Cart'
        }
    }

    showProductDetails = ()=>{
        this.setState({
            showDetails:!this.state.showDetails
        })
    }

    // Change the text on add to cart Btn
    btnAddMeth = () =>{
        if(this.state.btnAddCart == 'Add To Cart'){
            this.setState({
                btnAddCart: 'Remove From Cart'
            })
            alert('Added ' + this.state.product.productName + ' To Cart'); 
                       
        }else{
            this.setState({
                btnAddCart: 'Add To Cart'
            })
            alert('Removed ' + this.state.product.productName + ' From Cart');
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
                    </ul>
                                                                 
                    :
                    ""}
                </li>
            </React.Fragment>
        )
    }
}