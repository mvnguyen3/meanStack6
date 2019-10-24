import {connect} from "react-redux";
import Product from "../../Component/Product/ProductComponent";
import {GetProducts} from "../../State/Actions";

let mapStateToProps = (state) => {
    return {
        products: state.product.products,
        loading: state.user.loading
    }
}

// Call the GetProducts method from actions.js 
let mapDispatchToProps = (dispatch) =>{
    return {
        fetchProducts: () =>{
            dispatch(GetProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);