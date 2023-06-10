import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import RegisterPages from './pages/RegisterPages'
import ProfilePages from './pages/ProfilePages';
import RequiredAuth from './components/requireAuth';
import { useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { CallListUsers } from './redux/reducer/ListUsersSlice';
import { CallListPosts } from './redux/reducer/ListPostSlice';
import UploadImage from './components/update/UploadImage';
import { CallComments } from './redux/reducer/CommentSlice';
import { CallFollows } from './redux/reducer/Follows';
import PostAdmin from './components/admin/PostAdmin';
import UserAdmin from './components/admin/UserAdmin';
import RequiredAdmin from './components/requireAdmin';

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


  useEffect(() => {

    const getAllFollows = async () => {

      await dispatch(CallFollows()).unwrap();
    };
    getAllFollows();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} index />
        <Route element={<RequiredAuth />}>
          <Route path="/home" element={<HomePages />} />
          <Route path="/profile/:id" element={<ProfilePages />} />
          <Route path='/uploadImage' element={<UploadImage />} />
          <Route element={<RequiredAdmin />}>
            <Route path='/user-admin' element={< UserAdmin />} />
            <Route path='/post-admin' element={< PostAdmin />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
    </div>
  );
}

export default App;
