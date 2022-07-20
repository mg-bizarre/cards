import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ProfileContainer from './components/profile/ProfileContainer';
import store from './redux/store';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <div className='container'>
            <Header setSearchValue={setSearchValue} />
            <Routes>
              <Route path='/' element={<Home setSearchValue={setSearchValue} searchValue={searchValue} />} />
              <Route path='/profile/:id' element={<ProfileContainer />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
