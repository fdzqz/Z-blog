import React from 'react'

import styles from '../../css/sidebar.css'
// import { connect } from 'react-redux'

// import indexSelector from '../selectors/indexSelector'

class Sidebar extends React.Component {
    render() {
        return (
            <div className={styles.sidebarWrap}>
                <div className={styles.sidebar}>
                    <div className={styles.perImfor}>
                        <div className={styles.perPic}></div>
                        <p className={styles.perName}>曾庆仲</p>
                        <p className={styles.perMotto}>无知会产生恐惧 已知会产生无趣</p>
                        <p className={styles.perEmail}><em>E-mail：</em>fdzqzz@gmail.com</p>
                        <p className={styles.perLink}>
                            <a className={styles.perBlog,styles.perLinkItem} href='http://www.jianshu.com/users/e1917e61d1d0/timeline'>BLOG</a> |
                            <a className={styles.perGit,styles.perLinkItem} href='https://github.com/fdzqz'>GITHUB</a> |
                            <a className={styles.perLinkItem} href='https://github.com/fdzqz'>博文</a> |
                            <a className={styles.perLinkItem} href='https://github.com/fdzqz'>简历</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// App.propTypes = {
//     isLogin: React.PropTypes.bool.isRequired
// }

// const mapStateToProps = (state) => {
//     //
// }

// const mapDispatchToProps = (dispatch) => {
//     onTodoClick: (id) => {
//         dispatch(toggleTodo(id))
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

export default Sidebar
