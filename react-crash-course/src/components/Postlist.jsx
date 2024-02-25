import React from 'react'
import Post from './Post'
import styles from './Postlist.module.css'
function Postlist() {
  return (
    <ul className={styles.posts}>
    <Post author ="maximilian" body ="React Js is good"/>
    <Post author = "Jake" body ="Next Js is The Best!"/>
    </ul>
  )
}

export default Postlist
