import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Table from "./Table";

function Content(props) {
  const [datas, setDatas] = useState(JSON.parse(localStorage.getItem("datas")) ?? []);
  // Lọc dữ liệu hiện ra tab
  // useEffect(() => {
  //   setDatas(JSON.parse(localStorage.getItem("datas")) ?? []);
  //   if(props.search !== "") {
  //     let newData = [...datas]
  //     newData = newData.filter(item=>item.name.toLowerCase().includes(props.search))
  //     setDatas([...newData]);
  //   }
  // }, [props.update,isUpdate]);

  // useEffect(() => {
  //   if (active === 'tab1') {
  //     setDatas(JSON.parse(localStorage.getItem("datas")) ?? [])
  //   }
  //   if (active === 'tab2') {
  //     const getLocal = JSON.parse(localStorage.getItem("datas"))
  //     const filterData = getLocal.filter(data => data.type === "Company")
  //     setDatas(filterData)
  //   }
  //   if (active === 'tab3') {
  //     const getLocal = JSON.parse(localStorage.getItem("datas"))
  //     const filterData = getLocal.filter(data => data.type === "Home")
  //     setDatas(filterData)
  //   }
  // }, [active])

  const key = useParams();
  if(key === 'company'){
      
  }


  return (
  
    <div>

      <ul className="nav nav-tabs mb-4 pb-2 " id="ex1" role="tablist">
        <li className="nav-item d-flex gap-1" role="presentation">
          <Link className="nav-link" to='/'>All</Link>
          <Link className="nav-link" to='/company'>Company</Link>
          <Link className="nav-link" to='home'>Home</Link>
        </li>
      </ul>
      <Routes>
      <Route path="/" element = {<Table update={props.update}/>}/>
      <Route path="/company" element = {<Table update={props.update}/>}/>
      <Route path="/home" element = {<Table update={props.update}/>}/>
    </Routes>
    </div>
  )
}
export default Content;