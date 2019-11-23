import React, { Component } from 'react';

class RegularComp extends Component {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextProps.name !==  this.props.name){
    //         return true;
    //     }else {
    //         return false;
    //     } 

    // }
    render(){
        console.log('Regular Component Render')
        return (
            <>
                <h1>Regular Component Name: {this.props.name}</h1>
            </>
        )
    }
}

export default RegularComp;