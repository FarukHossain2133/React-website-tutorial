
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './memo';

class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 1,
     
    }
   console.log('parent constructor calling')
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: this.state.name + 1
      })
      // console.log('component did mount calling')
    }, 2000);
  }
  
  render() {
      console.log('Parent component render')
    return (
       <>
        <div className="container">
          <div className="jumbotron">
            <div  className="row">
              <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Parent Component: {this.state.name}</h1>
                {/* <RegComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
               
              </div>
            </div>
          </div>
        </div>
       </>
    );
  }
   
}

ReactDOM.render(<ParentComp />, document.getElementById('root'));
