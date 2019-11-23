
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
     users: ['Faruk', 'Nazmul', 'Mehedi', 'Himel', 'Rubel'],
    shoppingCart: [
      {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
      {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
      {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
      ]
    }
  }

  updateEmployeeRecords = () => {
    
  }

  render() {
       
    return (
       <>
        <div className="container">
          <div className="jumbotron">
            <div  className="row">
              <div className="col-md-6 offset-md-3">
                <h1 className = "text-center">Hello Employee</h1>
                  <ul className="list-group rounded my-3">
                    {this.state.shoppingCart.map((el, index) => 
                      <li className="list-group-item d-flex justify-content-between" key={index}>
                        <span>{el.id}</span>
                        <span>{el.item}</span>
                        <span>{el.color}</span>
                        <span>{el.size}</span>
                        <span>{el.price}</span>
                      </li>
                    )}
                  </ul>
                  <button  onClick = {this.updateEmployeeRecords} className="btn btn-outline-dark"> Update employee Info</button>
              </div>
            </div>
        </div>
        </div>
       </>
    );
  }
   
}

ReactDOM.render(<Employee />, document.getElementById('root'));
