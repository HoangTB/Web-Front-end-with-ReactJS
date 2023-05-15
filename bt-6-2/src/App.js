import logo from './logo.svg';
import './App.css';
import Control from './component/Control';
import Liststudent from './component/ListStuden';
import Form from './component/Form';

function App() {
  return (
    <div className = "row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control />
          <Liststudent />
        </div>
      </div>
        <Form />
      </div>
      );
}

      export default App;
