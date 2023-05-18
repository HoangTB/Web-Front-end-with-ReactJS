import React from "react";
class Register extends React.Component {
    constructor(props) {
        super(props)
       this.state =  {
        user:{
          username: "",
          password:"",
          cpassword:"",
          email:"",
        }

       }
       this.handelSubmit = this.handelSubmit.bind(this);
    }
    handleChange = (event) => {
      const key = event.target.name;
      const newUser =  {};
      newUser[key] = event.target.value;
      this.setState({
        user: {...this.state.user,...newUser},
      })
    }
   
    handelSubmit = (event) => {
        this.props.onSubmit(this.state.user);
    }

   
    render() {

        return (
            <div className="form-panel two">
            <div className="form-header">
              <h1>Register Account</h1>
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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required="required"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    required="required"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required="required" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <button type="submit" onClick={this.handelSubmit}>Register</button>
                </div>
              </form>
            </div>
          </div>
    
        )
    }
}
export default Register