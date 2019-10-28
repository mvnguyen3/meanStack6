import React from "react";

export default class CartSummary extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            my_token: ""
        }
    }

    
    generateTokenFunc = () => {
        let randomChar = "abcdefghijklmnopsef1234567890!@#$%^&*()";
            let my_token_generate = ""; // reset point
            for(var i=0; i<7; i++){
                let id = Math.ceil(Math.random() * 20);
                my_token_generate += randomChar.charAt(id).toUpperCase();
            }
            console.log("MyToken is: " + my_token_generate);
            this.setState({
                my_token: my_token_generate
            })
    }
    
    
    render(){
        return (
            <div> 
                <h2>Cart Summary</h2>
                {/* <p> Amount: {amount} </p>
                <p> Count: {count} </p> */}
                <button onClick={this.generateTokenFunc}> 
                    Generate Tokens
                </button>
                <p> Token: {this.state.my_token} </p>
            </div>
        )   
    }
}