import React, { PureComponent } from 'react';

class PureComp extends PureComponent {

    
    render(){
        console.log('Pure Component Render')
        return (
            <>
                <h1>Pure Component Name: {this.props.name}</h1>
            </>
        )
    }
}

export default PureComp;