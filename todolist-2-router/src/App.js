import './App.css';
import Form from './components/Form';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const handleClick = () => {
      setUpdate(!update);
    };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div
          className="row d-flex justify-content-center align-items-center
              h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  MINI PROJECT TODO LIST
                </h3>
                <div className="input-group">
                <button onClick={() => setShow(!show)} className="btn btn-info ms-2">Add</button>
                  <div className="form-outline">
                    <input type="text" className="form-control" placeholder='...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleClick}>
                    <i className="fas fa-search" />
                  </button>
                </div>

                {show && <Form closeForm={() => setShow(false)} updateData={() => setUpdate(!update)} />}
                <Content update={update} search = {search}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
