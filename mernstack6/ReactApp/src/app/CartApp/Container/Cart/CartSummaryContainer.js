import {connect} from 'react-redux';
import CartSummary from "../../Component/Cart/CartSummaryComponent";
import {addItem} from "../../State/Actions";

function recalculate(items){
    console.log("RECALCULATE ", items)
    let amount = 0, 
        count = 0;

    for(let item of  items) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount, //ES6 sugar amount: amount
        count
    }
}


const mapStateToProps = (state) => {
   let result = recalculate(state.cart);
    return {
       
        ...result
    };
}
// let mapDispatchToProps = (dispatch) => {
//     return{
      
//     }
// }

export default connect(mapStateToProps, null)(CartSummary);