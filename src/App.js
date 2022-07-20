import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PostContainer from './components/post/PostContainer';
import { getUsers } from './redux/usersSlice';
import { fetchPosts } from './redux/homeSlice';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { posts, status, fetchedDate } = useSelector((state) => state.homePage);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();

    if (status === 'idle' && today - oneday > fetchedDate) {
      dispatch(fetchPosts());
      dispatch(getUsers());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Header setSearchValue={setSearchValue} />
          <Routes>
            <Route path='/' element={<Home posts={posts} users={users} searchValue={searchValue} />} />
            <Route path='/post/:id' element={<PostContainer users={users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
