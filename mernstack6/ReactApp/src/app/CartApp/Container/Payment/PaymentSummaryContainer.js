import {connect} from 'react-redux';
import PaymentSummary from '../../Component/Payment/PaymentSummaryComponent';

const mapStateToProps = (state) => {
    let result = recalculate(state.cart); //state.cart will inclue all the item on the cart
    // result will be an array of elements
    return {...result};
}

function recalculate(items){
    let amount=0, count =0;

    for(let item of items){
        amount += item.qty * item.price;
        count += item.qty;
    }
    return {
        amount, count
    }
}

export default connect(mapStateToProps, null)(PaymentSummary) // Passing data to PaymentSummary