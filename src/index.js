/**
 * Created by zqz on 16-12-15
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, routes } from 'react-router'
// import { createStore, combineReducers } from 'redux'
// import { Provider, connect } from 'react-redux'
// import * as actions from './js/actions/index.js'

import App from './js/containers/app.jsx'
import Login from './js/containers/login.jsx'
// import ArticleList from './js/containers/articleList.jsx'
import AdArticleList from './js/containers/adArticleList.jsx'
import AdArticleAdd from './js/containers/adArticleAdd.jsx'
import Article from './js/containers/article.jsx'

render(
    <Router history={browserHistory} routes={routes}>
        <Route path='/' component={App}>
            <IndexRoute component={Login} />
            <Route path='/adArticleList' component={AdArticleList} />
            <Route path='/adArticleAdd' component={AdArticleAdd} />
            <Route path='/article' component={Article} />
        </Route>
    </Router>,
    document.getElementById('root')
)
