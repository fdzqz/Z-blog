import { combineReducers } from 'redux'


import login from './login'

const reducers = combineReducers({
    login: login
})

export default reducers
