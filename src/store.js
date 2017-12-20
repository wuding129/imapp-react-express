/*
import {createStore} from 'redux'

function counter(state=0, action){
  switch(action.type){
    case '加机关枪':
      return state+1
    case '减机关枪':
      return state-1
    default:
      return 10
  }
}

const store = createStore(counter)

const init = store.getState()
console.log(init)

function listener(){
  const state = store.getState()
  console.log(state)
  return state
}

store.subscribe(listener)
// 派发事件，传递action
store.dispatch({type: '加机关枪'})
store.dispatch({type: '加机关枪'})
store.dispatch({type: '减机关枪'})
store.dispatch({type: ''})*/



// action常量
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// reducer
export function counter(state=0, action){
  switch(action.type){
    case ADD_GUN:
      return state+1
    case REMOVE_GUN:
      return state-1
    default:
      return 10
  }
}

// actions creator
export function addGun(){
  return {type: '加机关枪'}
}
export function removeGun(){
  return {type: '减机关枪'}
}
export function addGunAsync(){
  return dispatch=>{
    setTimeout(()=>{
      dispatch(addGun())
    }, 2e3)
  }
}