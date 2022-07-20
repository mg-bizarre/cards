import style from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className={style.post}>
      <NavLink to={`/profile/${post.id}`} className={style.postLink}>
        <div className={style.titleBlock}>
          <h2 className={style.title}>{post.title}</h2>
        </div>
        <p className={style.body}>{post.body}</p>
      </NavLink>
    </div>
  );
};

export default Post;
