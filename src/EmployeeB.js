
import React, {Component} from 'react';

class EmployeeB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Vikash",
      empBid: 102
    }
    console.log('EmployeeB constructor calling')
  } 
 
  UNSAFE_componentWillMount(){
    console.log('EmployeeB Component Will Mount')
  }

  componentWillUnmount() {
    console.log('EmployeeB component Will Unmount calling')
  }
 
  
  render() {
       console.log("EmployeeB render Calling")
    return (
       <>
        <div className="container">
          <div className="jumbotron">
            <div  className="row bg-dark text-light">
              <div className="col-md-6 offset-md-3">
                <h1>Hello EmployeeB</h1>
                 
              </div>
            </div>
        </div>
        </div>
       </>
    );
  }
   
}

export default EmployeeB;
