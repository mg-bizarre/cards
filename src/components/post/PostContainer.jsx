import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, setCurrentPost } from '../../redux/postSlice';
import { useLocation } from 'react-router-dom';
import Post from './Post';

const PostContainer = ({ users }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentPost, status } = useSelector((state) => state.post);

  const id = location.pathname.substring(6);

  useEffect(() => {
    dispatch(setCurrentPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();
    if (!currentPost || today - oneday > currentPost.fetchedDate) {
      dispatch(getPost(id));
    }
  }, [currentPost, id, dispatch]);

  if (currentPost && users) {
    return <Post users={users} post={currentPost.data} />;
  } else if (status === 'failed') {
    return <div>Error</div>;
  }
};

export default PostContainer;
