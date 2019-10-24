import {connect} from 'react-redux';
import PaymentComponent from '../../Component/Payment/PaymentComponent';

let mapStateToProps = (state) => {
    console.log('From PaymentContainer!!! Redux map state to props STATE', state);
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps,null)(PaymentComponent);