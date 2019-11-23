
import React, {Component} from 'react';

class EmployeeB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Faruk",
      empBID: this.props.empBid
    }
    console.log('EmployeeB constructor calling')
  } 
 
  static getDerivedStateFromProps(props, state) {
    console.log('EmployeeB getDerivedStateFromProps Calling');
    console.log(props,state)
    if(props.empBid !== state.empBID){
      return {
        empBID: props.empBid
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProp, nextState){
    console.log('EmployeeB shouldcomponentUpdate calling');
    console.log(nextProp, nextState);
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('EmployeeB getSnapshotBeforeUpdate calling');
    console.group(prevProps, prevState)
    return 123; 
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('employeeB ComponentDidUpdate is calling')
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
                  <p>Your employeeB id is: {this.state.empBID}</p>
              </div>
            </div>
        </div>
        </div>
       </>
    );
  }
   
}

export default EmployeeB;
