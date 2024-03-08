import React from "react";
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./Postlist.module.css";


function Postlist({isPosting , onStopPosting}) {
  const [posts , setPosts] = useState([]);

function addPostHandler(postData){
  // WHEN NEW STATE DEPEND ON OLD STATE
 setPosts((existingPosts) =>[postData , ...existingPosts]);
}

  return (
    <>
    {isPosting && (
    <Modal onClose ={onStopPosting}>
      <NewPost
        onCancel ={onStopPosting}
        onAddPost={addPostHandler}
      />
    </Modal>
    )}
    {posts.length > 0 && (
      <ul className={styles.posts}> 
      
      {posts.map((post)=>(<Post key ={post.body}author={post.author} body={post.body} /> 
      ))}
      </ul>
  )}

  {posts.length === 0 && (
    <div style={{textAlign:'center', color : 'white'}}>
      <h2>Type SOmething</h2>
      <p>memery🎃</p>
    </div>
  )}
    </>
  );}
    
      


export default Postlist;
