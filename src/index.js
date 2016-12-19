/**
 * Created by zqz on 16-12-15
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, routes } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import * as actions from './js/actions/index.js'

import App from './js/containers/app.jsx'
import Login from './js/containers/login.jsx'
// import ArticleList from './js/containers/articleList.jsx'
import AdArticleList from './js/containers/adArticleList.jsx'
import AdArticleAdd from './js/containers/adArticleAdd.jsx'
import Article from './js/containers/article.jsx'

import reducers from './js/reducers/index.js'

const store = createStore(reducers)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {
                (function(state = store.getState()) {
                    return (
                        <Route path='/' component={App}>
                            <IndexRoute component={Login} />
                            <Route path='/adArticleList' component={AdArticleList} />
                            <Route path='/adArticleAdd' component={AdArticleAdd} />
                            <Route path='/article' component={Article} />
                            <Route path='/login' component={Article} />
                        </Route>
                    )
                })()
            }
        </Router>
    </Provider>,
    document.getElementById('root')
)
