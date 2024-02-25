import styles from './Post.module.css'

function Post(props) {
  return (
    <li className={styles.post}>
      <p className="title">{props.author}</p>
      <p className="subtitle">{props.body}</p>
    </li>
  );
}

export default Post;