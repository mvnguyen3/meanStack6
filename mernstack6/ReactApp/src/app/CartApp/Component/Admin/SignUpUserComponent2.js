import React from 'react';

export default class SignUpUser2 extends React.Component {
    
    constructor(props, context){
        super(props);
        
        this.state = {
            firstName: props.userFromMapStateToProps.user2.firstName,
            lastName: props.userFromMapStateToProps.user2.lastName,
            age: props.userFromMapStateToProps.user2.age,
            hobby: props.userFromMapStateToProps.user2.hobby
        }
    }

    AddUser = ()=>{
        let user2 = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            hobby: this.state.hobby
        }
        console.log("user2", user2)
        this.props.addUserFromMapDispatchToProps(user2);
    }

    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("fname")>=0){
            this.setState({
                firstName: target.value
            })
        }else if(classlist.indexOf("lname")>=0){
            this.setState({
                lastName: target.value
            })
        }else if(classlist.indexOf("hobby")>=0){
            this.setState({
                hobby: target.value
            })
        }else{
            this.setState({
                age: target.value
            })    
        }
    }

    render() {
        return (
            <div className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>First Name</b>
                        <input type="text" className="form-control col-md-6 fname" value={this.state.firstName} 
                            placeholder="First Name"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Last Name</b>
                        <input type="text" className="form-control col-md-6 lname" value={this.state.lastName} 
                          placeholder="Last Name"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Age </b>
                        <input type="number" className="form-control col-md-6 age" value={this.state.age} 
                            placeholder="Age" maxLength="11"
                            onChange={this.onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Hobby </b>
                    <input type="text" className="form-control col-md-6 hobby" value={this.state.hobby} 
                          placeholder="Hobby"
                          onChange={this.onChangeText} />
                    </div>                   
                    
                    
                    <input type="button" className={"btn btn-primary col-md-2"} value={"CreateUser2"} onClick={this.AddUser}/>
                </div>
            </div>
        )
    }   
}