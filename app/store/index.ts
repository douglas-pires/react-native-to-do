import { createStore, combineReducers } from 'redux'
import todos from './todos'
import initialState from './todos/state'

const reducers = combineReducers({ todos })

export default createStore(reducers, initialState)
