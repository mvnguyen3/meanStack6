import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../App.css";
import {Home} from "./CommonComponent/HomeComponent";
import {Footer} from "./CommonComponent/FooterComponent";
import Header from "./CommonComponent/HeaderComponent";
import SignUpUser from "./CartApp/Container/Admin/SignUpUserContainer";
import NotFound from  "./CommonComponent/ComponentNotFound";
import About from "./CommonComponent/AboutComponent";
import SignUpUser2 from "./CartApp/Container/Admin/SignUpUserContainer2";
import Product from "./CartApp/Container/Product/ProductContainer";
import Cart from "./CartApp/Container/Cart/CartContainer";
import Checkout from "./CartApp/Container/Checkout/CheckoutContainer"
import AddProducts from './CartApp/Container/AddProduct/AddproductContainer';
import Payment from './CartApp/Container/Payment/PaymentContainer';


export class App extends React.Component{
    
    constructor(props, context){
        super(props, context);
        this.state = {
            GreettingMsg: "No Message"
        }
    }

    // GreetMe = (greetMsg) =>{
    //     alert("Greeted by Child Component : "+ greetMsg);
    //     this.setState({
    //         GreettingMsg:greetMsg
    //     })
    // }
    //npm install react-redux redux redux-promise-middleware redux-thunk
    // actions, reducers, dispatchers, store
    // redux react-redux promisemiddleware
    render(){
        return(
            <Router>
                {/* Hi! <b>{this.state.GreettingMsg}</b> */}
                <Header />
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/User" component={SignUpUser} />
                    <Route path="/product" component={Product} />
                    <Route path="/addProduct" component={AddProducts} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/About" component={About} />
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />   
                </Switch>
                <Footer callBack={this.GreetMe}>
                    <h4>{"This is footer from APP Js"}</h4>
                    <h5>{"HTML as props"}</h5>
                </Footer>
            </Router>
        )
    }
}