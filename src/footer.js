import React from 'react';
import logo from './logo.jpg';
import './Style.css';

class Footer extends React.Component {
    render(){
         return (
        <div>
            <img src={logo} alt="logo"/>
            <p className= "copyright">Copyright@faruk.com</p>
        </div>
        )
    }
   
}

export default Footer;