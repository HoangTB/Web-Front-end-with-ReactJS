import { useState } from 'react';
import './App.css';
import MyDiv from './components/MyDiv';
import MyUl from './components/MyUl';

function App() {
  const [todos,setTodos] = useState([]);
  const handleAdd = (element)=>{
      setTodos([...todos,element]);
  }
  return (
    
    <div className="App">
      <MyDiv addTodo={handleAdd}/>
      <MyUl showTodo={todos}/>
    </div>
  );
}

export default App;
