import styles from './Post.module.css'
import { Link } from 'react-router-dom'
// ใช้อันนี้ ไม่ต้องเขียนprops.author concise กว่า
function Post({id, author, body}) {
  return (
    <li className={styles.post}>
      <Link to ={id}>
      <h3 className="title">{author}</h3>
      <p className="subtitle">{body}</p>
      </Link>
      </li>
  );
}

export default Post;