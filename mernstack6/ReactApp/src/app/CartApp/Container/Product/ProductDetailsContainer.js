import {connect} from 'react-redux';
import ProductDetails from "../../Component/Product/ProductDetailsComponent";
import {addItem} from '../../state/actions';
let mapStateToProps = (state) => {
    return {

    }
}
let mapDispathToProps = (dispatch) => {
    return {
        addItemFunc:()=>{
            alert('hahaha');
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductDetails);
