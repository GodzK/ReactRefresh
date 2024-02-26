import React from 'react'
import { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'
import styles from './Postlist.module.css'
function Postlist() {
// enteredBody: เก็บ text ที่ใส่ใน NewPost component
// enteredAuthor: เก็บชื่อที่ใส่ใน NewPost component
  const [enteredBody, setEnteredBody] = useState('') ;
  const [enteredAuthor , setEnteredAuthor] = useState();
// stateใช้ติดตามค่าที่เปลี่ยนเเปลง

//  อัปเดต enteredBody state กับค่าที่ใส่ใน textarea
//  อัปเดต enteredAuthor state กับค่าที่ใส่ใน text input
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
