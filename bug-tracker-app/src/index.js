import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bugs/actions';
import store from './store';
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp(){
    const bugs = store.getState();
    root.render(<Bugs bugs={bugs} {...bugActionDispatchers}/>)
}
renderApp();
store.subscribe(renderApp)

/* ES6 Modules examples */

/* 
import * as calc from './calculator';
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator';
const { add, subtract } = calc
console.log(add(100,2000))
console.log(subtract(100,2000))  
*/

/* 
import { add, subtract } from './calculator';
console.log(add(1000,2000))
console.log(subtract(1000,2000))  
*/

/* 
import c from './calculator'
console.log(c.add(1000,2000))
console.log(c.subtract(1000,2000))   
*/

