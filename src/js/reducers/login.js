import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGOUT } from '../actions'
export default function login (state = {
    isLogin: false,
    user: {},
    isLogining: false
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGIN_RECEIVE:
            return posts(state, action);
        case LOGOUT:
            return Object.assign({}, state, {
                isLogin: false,
                user: {}
            });
        default:
            return state;
    }
}

function posts ( state = {
    isLogining: false
}, action ) {
    switch (action.type){
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLogining: true,
            });
        case LOGIN_RECEIVE:
            return Object.assign({}, state, {
                isLogining: false,
                user: action.user,
                isLogin: action.isLogin
            });
        default:
            return state;
    }
}
