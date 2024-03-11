import Post from "./Post";
import styles from "./Postlist.module.css";
import { useLoaderData } from "react-router-dom";
function Postlist() {
  const posts = useLoaderData();



  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(post => (
            <Post key={post.id} id = {post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Type Something ...</h2>
        </div>
      )}
     
    </>
  );
}

export default Postlist;
