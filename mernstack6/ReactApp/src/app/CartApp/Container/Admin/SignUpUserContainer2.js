//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import SignUpUser2 from '../../Component/Admin/SignUpUserComponent2';//F12
import {signInUpUser2} from '../../state/actions';

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        userFromMapStateToProps: state.user2
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUserFromMapDispatchToProps:(user2) => {
            dispatch(signInUpUser2(user2));
        }
    }
}

//connect method is the one that allows us to subscribe a component

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUser2);