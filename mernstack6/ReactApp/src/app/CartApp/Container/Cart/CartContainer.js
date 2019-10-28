import {connect} from "react-redux";
import CartComponent from "../../Component/Cart/CartComponent";
import {bindActionCreators} from "redux";
import {addItem, empty, saveCartItems} from '../../state/actions';


let mapStateToProps = (state) => {
    return{
        cartLength:state.cart.length,
        items : state.cart,
        userid: state.user.user._id
    }
}

// Called by Cart component
let mapDispatchToProps = (dispatch) => {
    return{
        // addItemFunc:()=>{
        //     alert('hahaha');
        // },
        addItemFunc:()=>{
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            dispatch(addItem(item));
        },
       
        empty: bindActionCreators(empty, dispatch),
        // empty: () =>{
        //     dispatch(empty)
        // },
        saveCartItems: (items,userid) => {
            saveCartItems(items,userid)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);