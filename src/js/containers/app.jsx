import React from 'react'

import styles from '../../css/content.css'
// import { connect } from 'react-redux'

// import indexSelector from '../selectors/indexSelector'

import Sidebar from '../components/sidebar.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
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

export default App
