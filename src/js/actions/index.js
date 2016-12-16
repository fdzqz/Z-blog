import fetch from 'isomorphic-fetch'

/**
 * 登录
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE'

export function action_login ( user ) {
    return (dispatch, getState) => {
        if(should_login(getState(), user)) {
            return dispatch(fetch_login(user))
        }
    }
}
