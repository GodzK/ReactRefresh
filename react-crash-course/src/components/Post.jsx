import styles from './Post.module.css'

function Post(props) {
  return (
    <li className={styles.post}>
      <h3 className="title">{props.author}</h3>
      <p className="subtitle">{props.body}</p>
    </li>
  );
}

export default Post;