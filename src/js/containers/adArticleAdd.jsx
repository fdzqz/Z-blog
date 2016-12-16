import React from 'react'
// import { connect } from 'react-redux'


import styles from '../../css/adArticleAdd.css'
import Markdowm from '../utils/markdown.min.js'

// import indexSelector from '../selectors/indexSelector'

class AdArticleAdd extends React.Component {
    // componentDidMount() {
    //     editor(this.refs.editBox, this.refs.editPre)
    // }

    editor(input, preview) {
        // alert(input.value)
        input = this.refs.editBox
        preview = this.refs.editPre
        // alert(input.value)
        preview.innerHTML = markdown.toHTML(input.value);
    }

    render() {
        return (
            <div className={styles.adArtAddWrap}>
                <div className={styles.adArtAdd}>
                    <div className={styles.aArtAddCon}>
                        <div className={styles.editArea}>
                            <div className={styles.editAreaHea}>
                                <input type='text' className={styles.editArtTit} placeholder='请输入文章标题'/>
                                <input type='button' className={styles.editAreaSubBtn} value='发表文章' />
                            </div>
                            <div className={styles.editBoxWrap}>
                                <textarea onInput={this.editor.bind(this)} className={styles.editBox} ref='editBox'></textarea>
                            </div>
                        </div>
                        <div className={styles.prevArea}>
                            <div className={styles.editPre} ref='editPre'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdArticleAdd
