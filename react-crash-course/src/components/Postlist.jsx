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
      <ul className={styles.posts}> 
      {/* map return new array */}
      {posts.map((post)=><Post author={post.author} body={post.body} />)} 
      </ul>
    </>
  );
}

export default Postlist;
