import React, {Component} from "react";

export default class CartItem extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        });
    }

    //es next
    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        this.setState({
            qty: target.value
        })
    }

    componentDidMount() {
        !this.props.donotrender ? this.inputElem.focus():"";
     }


     // Make changed
    render() {
        console.log("CartItem render", this.props.item.id);         
        let {item} = this.props;
        return(            
            <tr>
            <td>{item.name}</td>
            <td>{item.price}
               <p ref="discount"> </p>
            </td>
            {!this.props.donotrender?<td>
               <input value={this.state.qty} 
                      type="number"
                      onChange={this.onChangeText}
                      ref = {(elem) => this.inputElem = elem}
               />   
            </td> : 
            <td>{item.qty}</td>}
            <td> {item.price * item.qty} </td>
            {!this.props.donotrender ?
                <td>
                    <button onClick={() => this.props.actions.updateItem(item.id, this.state.qty)}>
                        Update
                    </button>
                    <button onClick={() => this.props.actions.removeItem(item.id)}>
                        Remove
                    </button>
                </td> :""
            }
        </tr>    
        )
    }
}