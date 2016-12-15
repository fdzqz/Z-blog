/**
 * Created by zqz on 16-12-15
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, routes } from 'react-router'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

import App from './js/containers/app.jsx'
import Login from './js/containers/login.jsx'
import ArticleList from './js/containers/articleList.jsx'

render(
    <Router history={browserHistory} routes={routes}>
        <Route path='/' component={App}>
            <IndexRoute component={Login} />
            <Route path='articleList' component={ArticleList} />
        </Route>
    </Router>,
    document.getElementById('root')
)
