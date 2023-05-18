import logo from './logo.svg';
import './App.css';
import BT1 from './components/BT1';
import BT2 from './components/BT2';
import BT3 from './components/BT3';
import BT4 from './components/BT4';

function App() {
  return (
    <div className="App">
      <BT1/>
      <hr/>
      <BT2 count={3}/>
      <hr/>
      <BT3/>
      <hr/>
      <BT4/>
    </div>
  );
}

export default App;
