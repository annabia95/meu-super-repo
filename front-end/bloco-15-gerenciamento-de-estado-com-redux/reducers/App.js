import { createStore } from 'redux'
import combineReducers from './reducers/index'

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