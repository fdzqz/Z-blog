import React from 'react'
// import { connect } from 'react-redux'


import styles from '../../css/login.css'

// import indexSelector from '../selectors/indexSelector'

class Login extends React.Component {
    render() {
        return (
            <div className={styles.loginWrap}>
                <div className={styles.login}>
                    <h2 className={styles.logTit}>后台登录</h2>
                    <form className={styles.logForm}>
                        <p className={styles.logItem}>
                            <label className={styles.logLab} for='userName'>账号：</label>
                            <input className={styles.logInp} type='text' placeholder='请输入昵称' />
                        </p>
                        <p className={styles.logItem}>
                            <label className={styles.logLab} for='password'>密码：</label>
                            <input className={styles.logInp} type='password' placeholder='请输入密码' />
                        </p>
                        <p className={styles.logItem}>
                            <input className={styles.subBtn} type='button' value='登录' />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
