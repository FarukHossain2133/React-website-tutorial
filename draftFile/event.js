
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Users from './Users';

// Rendering component

class Employee extends Component {
    constructor(props){
        super(props);
          this.state = {
             name: this.props.name,
             code: 0
        }
    }

     changeName = (e) => {
         const name = e.target.value;
        //  const chars = e.keyCode || e.charCode;
        //  console.log(chars)
        this.setState({
            name: name,
            code: 5
        })

    }
    
    render(){
       
        return (
            <> 
                <h1>Name: {this.state.name}</h1>
                <h1>charCode: {this.state.code}</h1>
                
                <input onChange = {this.changeName}/>
                
                {/* <button class="btn btn-lg btn-primary text-uppercase" onClick = { this.changeName }>Change Name</button> */}
            </>
        )
    }
}

ReactDOM.render(<Employee name="Faruk" />, document.getElementById('root'));














// class Employee extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//         name: this.props.name,
//         count: this.props.count
//         }
//         this.clickMe = this.clickMe.bind(this)
//     }
   
//     clickMe() {
//         let count = this.state.count;
//         let name = this.state.name;

//         this.setState({
//             count: ++count
//         })

//         this.setState({name: 'Michel'})
//     }
//     render(){
//         return (
//             <>
//             <h1>Hello Employee </h1>
//             <h1>Name: {this.state.name} </h1>
//             <h4>Total Click: {this.state.count}</h4>
//             <button onClick={this.clickMe}>Button</button>
//             </>
//         )
        
//     }
// }


// ReactDOM.render(<Employee name="Faruk" count='0'/>, document.getElementById('root'))