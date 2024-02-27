import styles from './Post.module.css'

// ใช้อันนี้ ไม่ต้องเขียนprops.author concise กว่า
function Post({author, body}) {
  return (
    <li className={styles.post}>
      <h3 className="title">{author}</h3>
      <p className="subtitle">{body}</p>
    </li>
  );
}

export default Post;