import AllPosts from './posts/AllPosts';
import style from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/homeSlice';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Home = ({ setSearchValue, searchValue }) => {
  const dispatch = useDispatch();
  const { posts, nextPage, totalPages, status, fetchedDate } = useSelector((state) => state.homePage);
  // eslint-disable-next-line
  const [isFetching, setIsFetching] = useInfiniteScroll(() => {
    if (nextPage <= totalPages) {
      dispatch(fetchPosts(nextPage));
    }
    setIsFetching(false);
  });

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();

    if (status === 'idle' && today - oneday > fetchedDate && nextPage <= totalPages) {
      dispatch(fetchPosts(nextPage));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={style.home}>
      <AllPosts searchValue={searchValue} people={posts} />
    </div>
  );
};

export default Home;
