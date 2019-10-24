import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        return(
            <div>    
                {this.props.user.user.firstName != "" ?
                    <div>          
                    <div className="col-md-12 headerPage">
                        Hi, <b>{this.props.user.user.firstName}</b> ! Welcome to Synergysticit Solutions
                    </div>
                        <div className="col-md-12">
                        <NavLink to="/Home" exact className="button" activeClassName="success" >Home </NavLink> 
                        <NavLink to="/product" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Products  </NavLink>
                        <NavLink to="/addProduct" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Add Products  </NavLink>
                        <NavLink to="/cart" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Cart  </NavLink>               
                        <NavLink to="/checkout" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Checkout  </NavLink>                                    
                        {/* <NavLink to="/payment" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Payment  </NavLink>                                     */}
                        <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>                
                        </div>
                    </div>
                :
                    <div className="col-md-12">
                    <NavLink to="/Home" exact className="button" activeClassName="success" >Home </NavLink>                                   
                    <NavLink to="/User" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Login </NavLink>
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>                
                    
                    </div>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);