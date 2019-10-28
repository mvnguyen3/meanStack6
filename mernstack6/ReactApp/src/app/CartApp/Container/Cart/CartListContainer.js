import {connect} from "react-redux";
import CartList from "../../Component/Cart/CartListComponent";


const mapStateToProps = (state) => {
    return {
         items: state.cart
    };

    // return {
    //     token: state.cart
    // }
}

export default connect(mapStateToProps,null)(CartList);
//subscribing to update state and get the published values from store