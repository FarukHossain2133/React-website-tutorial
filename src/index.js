
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 function Employee() {
    const [name, setName] = useState('Faruk');
    const [empId, setempId] = useState(1234);
    const [age, setage] = useState(21);
    const [salary, setSalary] = useState(13000);
    const [salary2, setSalary2] = useState(14000);
 
    const clickHandler = () => {
      setName('Hossain');
      setempId(234543);
      setage(22)
    }
    const incrementSalary = () => {
      setSalary(salary + 50);
    }

    const decrementSalary = () => {
      setSalary2(salary2 - 50);
    }
 
    useEffect(() => {console.log('useEffect Rendering')}, [salary]);
    return (
       <>
        <div className="container">
          <div className="jumbotron">
            <div  className="row">
              <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Employee Details</h1>
                  <h4 className="text-center">Your name: {name}</h4>
                  <h4 className="text-center">Your empId: {empId}</h4>
                  <h4 className="text-center">Your age: {age}</h4>
                  <h4 className="text-center">Your Salary: {salary}</h4>
                  <h4 className="text-center">Your Salary2: {salary2}</h4>

                  <h4 className="text-center">Your age: {age}</h4>
                  <div className="text-center">
                    <button onClick={clickHandler} className="btn btn-dark">Click Me</button>
                    <button onClick={incrementSalary} className="btn btn-dark">Increment Salary</button>
                    <button onClick={decrementSalary} className="btn btn-dark">Decrement Salary</button>
                  </div>
                 
               
              </div>
            </div>
          </div>
        </div>
       </>
    );
  }

ReactDOM.render(<Employee />, document.getElementById('root'));
