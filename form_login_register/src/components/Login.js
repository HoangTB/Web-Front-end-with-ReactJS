import React from "react";
class Login extends React.Component {
  constructor(props) {
    super()
    this.state = {
      userLogin:{
      username: "",
      password: "",
    }

    }
    this.handelSubmitLogin = this.handelSubmitLogin.bind(this);
  }
  handleLogin = (event) => {
    const key = event.target.name;
    this.setState((prevState) =>({
      userLogin:{
        ...prevState.userLogin, [key]:event.target.value,
      }
    }))
  }

  handelSubmitLogin = (event) => {
    const {register} = this.props;
    const {username, password} = this.state.userLogin;
    let isLoggedIn = false;
    register.forEach(element => {
      if (element.username === username && element.password === password) {
        isLoggedIn = true;
        alert("Dang Nhap Thanh Cong");
      }

    });
    if(!isLoggedIn){
      alert ("User hoặc Password không đúng!")  
    }

  }


  render() {
    return (
      <div className="form-panel one">
        <div className="form-header">
          <h1>Account Login</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required="required"          
                onChange={this.handleLogin}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
                onChange={this.handleLogin}
              />
            </div>
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox" />
                Remember Me{" "}
              </label>
              <a className="form-recovery" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button type="submit" onClick={this.handelSubmitLogin}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Login