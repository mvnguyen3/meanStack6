import { connect } from "react-redux";
import CheckoutList from "../../Component/Checkout/CheckoutListComponent";

let mapStateToProps = (state) => {
    return {
        items: state.cart,
    }
}

export default connect(mapStateToProps, null)(CheckoutList);



