import React, {Component, PureComponent} from "react";
import {PropTypes} from "prop-types";

export class Home extends PureComponent{
    
    constructor(props, context){
        super(props, context);
        //Props are immutebale and can not be changed in given component
        this.state = { //is mutable and can be changed within component
            Name: props.Name != undefined ? props.Name : "Phuc Nguyen",
            Age: props.Age != undefined ? props.Age : 21,
            FullName : "Test Name",
            Title: "Home Component for EComm Application"
        }//Initializing the state

        this.textInput = React.createRef(); //creating ref element
        console.log("Creation Life Cycle : Constructor");
    }

    componentWillMount(){
        console.log("Creation Life Cycle : componentWillMount");
        console.log(document.getElementById("TestButton"));
    }

    componentDidMount(){
        console.log("Creation Life Cycle : componentDidMount");
        console.log(document.getElementById("TestButton"));
        
        //accessing the actual DOM using ref keyword
        //this.textInput.current.focus();
        //this.textInput.current.value = "Setting Up Reference Value";
    }

    componentWillUnmount(){
        console.log("Destruction Life Cycle : componentWillUnmount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Update Life Cycle : componentWillReceiveProps : ", nextProps);
    }

    // shouldComponentUpdate(nextProps , nextState){ //Most Important Update Life Cycle Method
    //     console.log("Update Life Cycle : shouldComponentUpdate");
    //     console.log("nextState :", nextState);

    //     if (nextState.Age > 23) {
    //         return false;
    //     }

    //     return true;  
    // }

    componentWillUpdate(nextProps , nextState){
        console.log("Update Life Cycle : componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Update Life Cycle : componentDidUpdate");

        console.log("prevState :", prevState);
    }

    UpdateAge = () => {
        console.log(this.state.Age);        
        this.setState({
            Age: this.state.Age+1
        });
        //this.state.Age = this.state.Age+ 1;
        //this.forceUpdate(); //it skips some of the lifecycle methods, so avoid using force update
        //console.log(this.state.Age);
    }
    
    UpdatName = (e) => {
        console.log(e.target.value);
        this.setState({
            Name: e.target.value
        })
    }

    render(){
        this.state.Age <= 21 ? console.log("Component Rendered First Time ") : console.log("We are re-rendering") 
        return(
            <div className={"loadimage"}>
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>
            </div>
            // <div>
            //     <input type="text" value={this.state.Name} onChange={this.UpdatName} />
            //     <h2>{"My Name is : "+this.state.Name}</h2>
            //     <h2>{"My Age is : "+this.state.Age}</h2>
            //     <div>
            //         <h2>{"Full Name : "}</h2> : <b>{this.state.FullName}</b>
            //     </div>
            //     <button id={"TestButton"} onClick={this.UpdateAge}>{"UpdateAge"}</button>
            //     <hr/>
            //     <input type="text" ref={this.textInput} />
            // </div>
        )
    }
}

// Home.propTypes = {
//     Name: PropTypes.string.isRequired,
//     Age: PropTypes.number.isRequired
// }

// Home.defaultProps = {
//     Name: undefined,
//     Age: undefined
// }