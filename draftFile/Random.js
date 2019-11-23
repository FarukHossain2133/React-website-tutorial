
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const i = Math.round(Math.random());
const colors = ['red', 'green', 'blue', 'yellow', 'chocolate', 'cyan'];
const back = ['red', 'green', 'blue', 'yellow', 'chocolate', 'cyan'];
const one = colors[Math.round(Math.random() * 6)];
const backg = colors[Math.round(Math.random() * 6)];
 
const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomNumber = Math.round(Math.random() * 100);
const myStyles = {
    color: one,
    backgroundColor: backg,
    borderRadius: randomNumber,
    margin: '0 auto',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: randomNumber
}

const tl = <h1 style = {myStyles}>{randomString}</h1>

const el = <h1>{tl} {randomNumber}</h1>


ReactDOM.render(el,
    document.getElementById('root')
   
);