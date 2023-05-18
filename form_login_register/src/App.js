import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import $ from "jquery";



class App extends React.Component {
  constructor(){
    super();
    this.state ={
      register: [],
    }
  }

  handleRegister = (user)=>{
    let isDulicate = false;
    this.state.register.forEach((userFE) => {
      if (userFE.email === user.email){
          isDulicate = true;
          alert("Email trùng")
      }
    });

    if(!isDulicate){
      const users = this.state.register;
      users.push(user);
      this.setState({register: users});
    }
    
  }

  
  render() {
    console.log(this.state.register);
    return (
      <div className='form'>
        <div className="form-toggle" />
        <Login register={this.state.register}/>
        <Register onSubmit={this.handleRegister}/>    
      </div>

    );
  }

  componentDidMount() {
    var panelOne = $(".form-panel.two").height(),
      panelTwo = $(".form-panel.two")[0].scrollHeight;

    $(".form-panel.two")
      .not(".form-panel.two.active")
      .on("click", function (e) {
        e.preventDefault();

        $(".form-toggle").addClass("visible");
        $(".form-panel.one").addClass("hidden");
        $(".form-panel.two").addClass("active");
        $(".form").animate(
          {
            height: panelTwo,
          },
          200
        );
      });

    $(".form-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).removeClass("visible");
      $(".form-panel.one").removeClass("hidden");
      $(".form-panel.two").removeClass("active");
      $(".form").animate(
        {
          height: panelOne,
        },
        200
      );
    });
  }
}

export default App;

