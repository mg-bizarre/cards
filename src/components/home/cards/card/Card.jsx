import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import SVG from '../../../general/svg/SVG';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../redux/homeSlice';
import { useEffect, useState } from 'react';

const Card = ({ card, users }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    users && setUser(users.find((user) => user.id === card.userId));
  }, [users, card.userId]);
  return (
    <div className={style.post}>
      <NavLink to={`/post/${card.id}`} className={style.postLink}>
        <div className={style.titleBlock}>
          <h2 className={style.title}>{card.title}</h2>
          {user && <div className={style.user}>by {user.username}</div>}
        </div>

        <p className={style.body}>{card.body}</p>
      </NavLink>
      <button
        type='button'
        aria-label='delete post button'
        className={style.close}
        onClick={() => dispatch(deletePost(card.id))}
      >
        <SVG id='close' extraClass='deletePost' />
      </button>
    </div>
  );
};

export default Card;
