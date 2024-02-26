import React from 'react'
import { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'
import styles from './Postlist.module.css'
function Postlist() {
  const [enteredBody, setEnteredBody] = useState('') ;
  const [enteredAuthor , setEnteredAuthor] = useState();


  // รวบข้อมูลที่ผู้ใช้กรอกมา เป็นfunc
   function bodyChangeHandler(event){
   setEnteredBody(event.target.value);
   }
   function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
    }
  
   return (
    <> 
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className={styles.posts}>
    <Post author ={enteredAuthor} body ={enteredBody}/>
    <Post author = "Jake" body ="Next Js is The Best!"/>
    </ul>
    </>
   
  )
}

export default Postlist
