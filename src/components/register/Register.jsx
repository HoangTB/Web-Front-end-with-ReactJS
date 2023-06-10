import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/reducer/UsersApiSlice';
import { toast, ToastContainer } from 'react-toastify';
function Register() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [errorFullName, setErrorFullName] = useState(false);
  const [errorPassword, setErrorPasword] = useState(false);
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState({
    email: '',
    user: '',
    fullname: '',
    password: '',
  });
  const handleChange = (e) => {
    if(e.target.name === 'email' && e.target.value !== ""){
      setErrorEmail(false);
    }
    if(e.target.name === 'user' && e.target.value !== ""){
      setErrorUser(false);
    }
    if(e.target.name === 'fullname' && e.target.value !== ""){
      setErrorFullName(false);
    }
    if(e.target.name === 'password' && e.target.value !== ""){
      setErrorPasword(false);
    }
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
      active: 2,
      admin:2
    })

  }
  const handleRegister = async (e) => {

    if (inputValue.email !== '' && inputValue.user !== '' && inputValue.fullname !== '' && inputValue.password !== '') {
      try {
        await dispatch(register(inputValue)).unwrap();
        toast.success('Sign Up Success!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });


      } catch (error) {

        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
    } else {
        if(inputValue.email ===''){
          setErrorEmail(true);
        };
        if(inputValue.user ===''){
          setErrorUser(true);
        };
        if(inputValue.fullname ===''){
          setErrorFullName(true);
        };
        if(inputValue.password ===''){
          setErrorPasword(true);
        };
    }


  }
  return (
    <div className='auth-form'>
      <ToastContainer />
      <div className="auth-left">
        <img
          src="/login-4.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className='auth-right'>
        <div className="register">
          <img
            src="/logo.png"
            alt=""
          />
          <input
            name='email'
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={inputValue.email}
          />
          <span className='error-content'>{errorEmail && "Please enter Email"}</span>
          <input
            name='user'
            type="user"
            placeholder="User"
            required
            onChange={handleChange}
            value={inputValue.user}
          />
          <span className='error-content'>{errorUser && "Please enter User"}</span>
          <input
            name='fullname'
            type="fullName"
            placeholder="Full Name"
            required
            onChange={handleChange}
            value={inputValue.fullname}
          />
          <span className='error-content'>{errorFullName && "Please enter Fullname"}</span>
          <input
            name='password'
            type="passWord"
            placeholder="Password"
            required
            onChange={handleChange}
            value={inputValue.password}
          />
          <span className='error-content'>{errorPassword && "Please enter Password"}</span>
          <button onClick={handleRegister}>Sign Up</button>


        </div>
        <div className="auth-more">
          <span>
            <>
              Don't have an account?{" "}{" "}
              <Link to="/login">Sign In</Link>
            </>
          </span>
        </div>
      </div>
    </div>

  )
}

export default Register;
