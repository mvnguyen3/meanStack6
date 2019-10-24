import {connect} from 'react-redux';
import CheckoutSummary from "../../Component/Checkout/CheckoutSummaryComponent";

function recalculate(items){
    console.log("RECALCULATE ", items)
    let amount = 0, 
        count = 0;

    for(let item of  items) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount,
        count
    }
}

const mapStateToProps = (state) => {
    let result = recalculate(state.cart); 
    console.log("This is a result..." , result);
    return {...result}; // ... means return an array of result
}

export default connect(mapStateToProps, null)(CheckoutSummary);