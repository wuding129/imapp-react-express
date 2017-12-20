import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'


class App extends Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
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
        <Button type='primary' onClick={()=>store.dispatch(addGun())}>申请武器</Button>
        <Button type='warning' onClick={()=>store.dispatch(removeGun())}>解除武器</Button>
        <Button type='warning' onClick={()=>store.dispatch(addGunAsync())}>拖两天给武器</Button>
      </div>
    );
  }
}

export default App;
