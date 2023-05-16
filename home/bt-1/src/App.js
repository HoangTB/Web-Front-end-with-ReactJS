import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Item from './component/Item';
import ListItems from './component/ListItem';
import React from 'react';
class App extends React.Component {
  render(){
    return (
      <div className='App'>
       <Header/>
      <Item/>
      <ListItems/>
      </div>
    );
  }
 
}

export default App;
