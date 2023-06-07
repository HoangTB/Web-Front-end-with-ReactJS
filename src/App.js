import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import RegisterPages from './pages/RegisterPages'
import Story from './components/story/Story';
import ProfilePages from './pages/ProfilePages';
import RequiredAuth from './components/requireAuth';
import { useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { CallListUsers } from './redux/reducer/ListUsersSlice';
import { CallListPosts } from './redux/reducer/ListPostSlice';
import UploadImage from './components/update/UploadImage';
import { CallComments } from './redux/reducer/CommentSlice';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const getAllUsers = async () => {
      await dispatch(CallListUsers()).unwrap();
    };
    getAllUsers()
  }, [])

  useEffect(() => {

    const getAllPosts = async () => {

      await dispatch(CallListPosts()).unwrap();
    };
    getAllPosts()
  }, [])


  useEffect(() => {

    const getAllComments = async () => {

      await dispatch(CallComments()).unwrap();
    };
    getAllComments()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route element={<RequiredAuth />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/profile/:id" element={<ProfilePages />} />
        </Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path='/uploadImage' element={<UploadImage />} />
      </Routes>
    </div>
  );
}

export default App;
