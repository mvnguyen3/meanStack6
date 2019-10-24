import {connect} from 'react-redux';
import AddProduct from '../../Component/AddProduct/AddProductComponent';
import {saveProducts} from '../../State/Actions';

let mapStateToProps = (state) => {
    console.log("FROM AddProductContainer!!! Redux map state to props STATE", state);
    return{
        products: state.products
       
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addProductDispatch:(products) => {
            dispatch(saveProducts(products)); // Go to SaveProducts Function on Action.js
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

