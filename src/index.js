import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
// import thunkMiddleware from 'redux-thunk'
// import { Provider, connect } from 'react-redux'
// import { combineReducers, createStore, applyMiddleware } from 'redux'
// import * as actions from './js/actions/index'

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ArticleList}/>
                <Route path="/login" component={Login} onEnter={loginRequireAuth}/>
                <Route path="/qr" component={Qr} onEnter={!loginRequireAuth}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
