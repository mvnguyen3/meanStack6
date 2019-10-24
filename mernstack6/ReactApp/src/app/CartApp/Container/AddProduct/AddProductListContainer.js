import {connect} from 'react-redux';
import AddProductList from '../../Component/AddProduct/AddProductListComponent';

// Getting items from AddProductReducer
let mapStateToProps = (state) => {
    console.log("FROM AddProductListContainer!!! Redux map state to props STATE", state);
    return {
        products: state.product.products,
        loading: state.user.loading
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        fetchProducts: () =>{
            dispatch(GetProducts())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddProductList);





