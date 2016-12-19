import React from 'react'

import styles from '../../css/content.css'
import { connect } from 'react-redux'

// import indexSelector from '../selectors/indexSelector'

import Sidebar from '../components/sidebar.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {

    // componentWillMount(){
    //     store.subscribe((state)=>this.setState(state))
    // }

    render() {
        return (
            <div>
                <Sidebar {...this.props}/>
                <div className={styles.content}>
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    isLogin: React.PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        user: state.login.user
    }
}

export default connect(
    mapStateToProps
)(App)
