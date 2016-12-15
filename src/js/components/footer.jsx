import React from 'react'

import styles from '../../css/footer.css'
// import { connect } from 'react-redux'

// import indexSelector from '../selectors/indexSelector'

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.fooWrap}>
                <div className={styles.footer}>
                    <p className={styles.copyright}>Copyright© 2016 fdzqz</p>
                </div>
            </div>
        )
    }
}

export default Footer
