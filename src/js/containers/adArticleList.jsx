import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router'

import styles from '../../css/adArticleList.css'

class AdArticleList extends React.Component {
    render() {
        return (
            <div className={styles.aArtListWrap}>
                <div className={styles.aArtList}>
                    <div className={styles.aArtHea}>
                        <h2 className={styles.aArtTit}>博文管理</h2>
                        <Link className={styles.addBtn} to='adArticleAdd'>添加博文</Link>
                    </div>
                    <div className={styles.aArtCon}>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <Link className={styles.aArtHanItem} to='/article'>查看</Link>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                        <div className={styles.aArtItem}>
                            <h3 className={styles.aArtItemTit}>文章题目11111111111</h3>
                            <div className={styles.aArtItemHan}>
                                <a className={styles.aArtHanItem} href='#'>查看</a>
                                <a className={styles.aArtHanItem} href='#'>编辑</a>
                                <a className={styles.aArtHanItem} href='#'>删除</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.aArtPage}>
                        <ul className={styles.aArtUl}>
                            <li className={styles.aArtPageItem}>首页</li>
                            <li className={styles.aArtPageItem}>上一页</li>
                            <li className={styles.aArtPageItem}>1</li>
                            <li className={styles.aArtPageItem}>2</li>
                            <li className={styles.aArtPageItem}>3</li>
                            <li className={styles.aArtPageItem}>下一页</li>
                            <li className={styles.aArtPageItem}>尾页</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default AdArticleList
