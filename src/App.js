import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'
import {addGun, removeGun, addGunAsync} from "./store";

class App extends Component {
  render() {
    const {num, addGun, removeGun, addGunAsync} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>现在有{num}把枪</div>
        <Button type='primary' onClick={addGun}>申请武器</Button>
        <Button type='warning' onClick={removeGun}>解除武器</Button>
        <Button type='warning' onClick={addGunAsync}>拖两天给武器</Button>
      </div>
    );
  }
}


const mapStatetoProps = (state)=>{
  return {num: state}
}
const actionCreators = { addGun, removeGun, addGunAsync }
App = connect(mapStatetoProps, actionCreators)(App)
export default App;
