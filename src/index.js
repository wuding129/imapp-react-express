/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/


import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


import './index.css'
import App from './App'
import {counter} from "./store";


const reduxDevtools = window.devToolsExtension?window.devToolsExtension(): f=>f
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools)
)

// 没用react-redux
/*

function render(){
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'))
}

render()
store.subscribe(render)*/

// 用react-redux
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
)
