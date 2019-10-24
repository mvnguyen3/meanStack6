import React from 'react';
import ProductList from '../../Container/AddProduct/AddProductListContainer';

export default class AddProduct extends React.Component{
    
    constructor(props, context){
        super(props);

        this.state = {
            productName: "",
            pDescription: "",
            pPrice: 0,
            pRating: "",

            reConfirm:false,
            addBtnText: 'Add'
        }
        
    }


    AddingComfirmation = () =>{
        if(this.state.addBtnText == 'Add'){
            this.setState({
                reConfirm:!this.state.reConfirm,
                addBtnText: 'Cancel'
            })
        }else{
            this.setState({
                reConfirm:!this.state.reConfirm,
                addBtnText: 'Add'
            })
        }
    }

   
    // Retrieve information from the form
    AddProduct = ()=> {
            let products = {
                productName: this.state.productName,
                pDescription: this.state.pDescription,
                pPrice: this.state.pPrice,
                pRating: this.state.pRating
            }
          
           if(products.productName == ""){
                console.log("Product is empty");
                alert("Please fill out all the fields");
                this.AddingComfirmation();
           }else{
            console.log("addProduct", products);
            this.props.addProductDispatch(products); // Sending object to mapDispatchToProps
           }
    }
    
    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("fname")>=0){
            this.setState({
                productName: target.value
            })
        }else if(classlist.indexOf("password")>=0){
            this.setState({
                pDescription: target.value
            })
        }else if(classlist.indexOf("street")>=0){
            this.setState({
                pPrice: target.value
            })
        }else{
            if (target.value && target.value.length <= 1) {
                this.setState({
                    pRating: target.value
                })    
            }            
        }
    }
    
    
    render() {
        return (
            <div className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 fname" value={this.state.productName} 
                            placeholder="Product Name" onChange={this.onChangeText}
                            />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description</b>
                        <input type="text" className="form-control col-md-6 password" value={this.state.pDescription} 
                          placeholder="Description" onChange={this.onChangeText}
                           />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                    <input type="text" className="form-control col-md-6 street" value={this.state.pPrice} 
                          placeholder="$" onChange={this.onChangeText}
                           />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Rating </b>
                        <input type="number" className="form-control col-md-6 cellphone" value={this.state.pRating} 
                            placeholder="Rating" onChange={this.onChangeText}
                             />
                    </div>
                    
                    <input type="button" className={"btn btn-primary col-md-2"} value={this.state.addBtnText} onClick={this.AddingComfirmation} />
                    {
                       this.state.reConfirm ? 
                       <input type="button" className={"btn btn-primary col-md-2"} value={"Yes"} onClick={this.AddProduct} />
                       : 
                       ""
                    }
                </div>

                <ProductList/>
            </div>
        )
    }   
}