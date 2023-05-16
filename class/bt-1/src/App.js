import "./App.css";
import Button2 from './components/bth-2';
import Button3 from './components/bth-3';
import Button4 from './components/bth-4';
import Button5 from './components/bth-5';
import Button6 from './components/bth-6';
import Tabs from './components/bt-6';
import Coins from './components/Coin';
import ButtonRollDice from './components/RollDice';
function App() {
  return (
    <div className="App">
      <Button2 text="Click Me" color="red" background="blue" width="300px" height="50px"/>
      <hr/>
      <Button3/>
      <hr/>
      <Button4/>
      <hr/>
      <Button5/>
      <hr/>
      <Button6/>
      <hr/>
      <Tabs/>
      <hr/>
      <Coins/>
      <hr/>
      <ButtonRollDice/>
    </div>
  );  
}

export default App;
