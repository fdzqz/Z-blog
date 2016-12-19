import React from 'react'

import styles from '../../css/sidebar.css'
import { Link } from 'react-router'
// import { connect } from 'react-redux'

// import indexSelector from '../selectors/indexSelector'

export default class Sidebar extends React.Component {
    render() {
        const { isLogin, user } = this.props
        return (
            <div className={styles.sidebarWrap}>
                <div className={styles.sidebar}>
                    <div className={styles.perImfor}>
                        <div className={styles.perPic}></div>
                        <p className={styles.perName}>曾庆仲</p>
                        <p className={styles.perMotto}>无知会产生恐惧 已知会产生无趣</p>
                        <p className={styles.perEmail}><em>E-mail：</em>fdzqzz@gmail.com</p>
                        <p className={styles.navLink}>
                            <a className={styles.perBlog,styles.navLinkItem} href='http://www.jianshu.com/users/e1917e61d1d0/timeline'>BLOG</a> |
                            <a className={styles.perGit,styles.navLinkItem} href='https://github.com/fdzqz'>GITHUB</a> |
                            <Link className={styles.navLinkItem} to='/adArticleList'>博文</Link> |
                            <a className={styles.navLinkItem} href='https://github.com/fdzqz'>简历</a>
                        </p>
                        {isLogin
                            ?<p className={styles.perLink}>
                                <Link className={styles.perLinkItem} to='/adArticleList'>博文管理</Link> |
                                <a className={styles.perLinkItem} href='https://github.com/fdzqz'>fdzqz</a> |
                                <a className={styles.perLinkItem} href='https://github.com/fdzqz'>注销</a>
                            </p>
                            :<p className={styles.perLink}>
                                <Link className={styles.perLinkItem} to='/login'>登录</Link>
                            </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         isLogin: state.login.isLogin,
//         user: state.login.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrement: () => dispatch(increment())
//   };
// }

// Sidebar.propTypes = {
//     isLogin: React.PropTypes.bool.isRequired,
//     isLogining: React.PropTypes.bool.isRequired
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Sidebar)
