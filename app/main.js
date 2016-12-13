'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { Provider, onnect } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import * as actions from './js/actions/index'

