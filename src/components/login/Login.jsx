import { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducer/UsersApiSlice";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPasword] = useState(false);
  const listUsers = useSelector((state) => state.listUsers);

  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("users");
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "email" && e.target.value !== "") {
      setErrorEmail(false);
    }
    if (e.target.name === "password" && e.target.value !== "") {
      setErrorPasword(false);
    }
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const emailIs = listUsers.filter((users) => users.email === inputValue.email);
  const handleLogin = async (e) => {
    if (inputValue.email !== "" && inputValue.password !== "") {
      try {
        const data = await dispatch(login(inputValue)).unwrap();

        if (emailIs[0]?.active === 2) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          toast.success("Logged in successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Account has been locked !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      if (inputValue.email === "") {
        setErrorEmail(true);
      }
      if (inputValue.password === "") {
        setErrorPasword(true);
      }
    }
  };
  return (
    <div className="auth-form">
      <ToastContainer />
      <div className="auth-left">
        <img src="/login-4.png" alt="..." />
      </div>
      <div className="auth-right">
        <div className="login">
          <img src="/logo.png" alt="" />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            name="email"
          />
          <span className="error-content">
            {errorEmail && "Please enter Email"}
          </span>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            name="password"
          />
          <span className="error-content">
            {errorPassword && "Please enter Password"}
          </span>
          <button onClick={handleLogin}>Log in</button>
        </div>
        <div className="auth-more">
          <span>
            <>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
