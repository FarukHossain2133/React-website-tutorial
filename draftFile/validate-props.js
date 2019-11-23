
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import propTypes from 'prop-types';

class Employee extends Component {
    render(){
    return <div>
            <h1>Your name: {this.props.name}</h1>
            <h1>Your Empoloyee ID: {this.props.empId}</h1>
        </div>
    }
}

Employee.propTypes = {
     name: propTypes.string.isRequired,
     empId: propTypes.number.isRequired

}

Employee.defaultProps = {
    name: 'Faruk Hossain',
    empId: 23456
}

ReactDOM.render(<Employee />, document.getElementById('root'))