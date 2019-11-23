// Parent Component

import React, {Component} from 'react';
import User from './User';
class Users extends Component {
    state = {
        users: [
            {name: "John", age: 20},
            {name: "Jill", age: 30},
            {name: "Peter", age: 40},
            {name: "Faruk", age: 50},
            {name: "Mill", age: 60}
        ], 
        title: 'Users List'
    }

    clickFunction = () => {
        const newState = this.state.users.map((user) => {
            const tmpUser = user;
            tmpUser.age -= 10;
            return tmpUser;
        })
        this.setState({newState})
        console.log(this.state)
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h2 style={{textAlign: 'center'}}>{this.state.title}</h2>
                <button className = "btn btn-primary" onClick={this.clickFunction}> Make Us 10 Years Younger</button>
               {
                   this.state.users.map((user) => {
                       return <User name = {user.name} age={user.age}></User>
                   })
               }
            </div>
        )
    }
}

export default Users;



// Chield Component

import React, { Component } from 'react';

const User = function(props){

    const myStyle = {
        color: 'white',
        backgroundColor: 'darkblue',
        fontSize: '30px',
        textAlign: 'center',
        padding: '5px',
        display: 'inlineBlock',
        width: '50%',
        margin: '0 auto 5px auto',
        borderRadius: '5px' 
       
    }

return <div style= {myStyle}>name: {props.name} age: {props.age}</div>
}

export default User;