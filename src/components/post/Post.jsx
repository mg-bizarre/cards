import { useState, useEffect } from 'react';
import style from './Post.module.css';

const Post = ({ post, users }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    users && setUser(users.find((user) => user.id === post.userId));
  }, [users, post.userId]);
  return (
    <main className={style.post}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>{post.title}</h2>
      </div>
      {user && <div className={style.user}>by {user.username}</div>}
      <p className={style.body}>{post.body}</p>
    </main>
  );
};

export default Post;
