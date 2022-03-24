import { createStore } from 'redux'
import combineReducers from './index'
const Redux = require('redux');

const store = createStore(combineReducers)
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())