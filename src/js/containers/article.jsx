import React from 'react'
// import { connect } from 'react-redux'

import styles from '../../css/article.css'

// import indexSelector from '../selectors/indexSelector'

class Article extends React.Component {


    render() {
        return (
            <div className={styles.articleWrap}>
                <div className={styles.article}>
                    <div className={styles.artHea}>
                        <h3 className={styles.artTit}>文章题目</h3>
                        <span className={styles.artDate}>2016-12-16</span>
                    </div>
                    <div className={styles.artCon}>
                        <p className={styles.artConDet}>aaaaaaaa</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
