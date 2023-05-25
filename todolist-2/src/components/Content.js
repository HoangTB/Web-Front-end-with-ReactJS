import { useEffect, useRef, useState } from "react";

function Content(props) {
  const [datas, setDatas] = useState([]);
  const [active, setActive] = useState("tab1");
  const [isUpdate,setIsUpdate] = useState(true);
  // Lọc dữ liệu hiện ra tab
  useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem("datas")) ?? []);
    if(props.search !== "") {
      let newData = [...datas]
      newData = newData.filter(item=>item.name.toLowerCase().includes(props.search))
      setDatas([...newData]);
    }
  }, [props.update,isUpdate]);

  useEffect(() => {
    if (active === 'tab1') {
      setDatas(JSON.parse(localStorage.getItem("datas")) ?? [])
    }
    if (active === 'tab2') {
      const getLocal = JSON.parse(localStorage.getItem("datas"))
      const filterData = getLocal.filter(data => data.type === "Company")
      setDatas(filterData)
    }
    if (active === 'tab3') {
      const getLocal = JSON.parse(localStorage.getItem("datas"))
      const filterData = getLocal.filter(data => data.type === "Home")
      setDatas(filterData)
    }
  }, [active])
  // Delete
  const handleDelete = (index) => {
    let datasDel = [...datas]
    const newData = [...datasDel.slice(0, index), ...datasDel.slice(index + 1)];   
    localStorage.setItem("datas", JSON.stringify(newData));
    setIsUpdate(!isUpdate)
  }

  // Edit
  const handleEdit = (data, index) => {

    const updateData = {data,index}
    props.onEdit(updateData);
    props.openForm();
    }
  
  
  return (
    <div>
      <ul className="nav nav-tabs mb-4 pb-2 " id="ex1" role="tablist">
        <li className="nav-item d-flex gap-1" role="presentation">
          <a className={active === 'tab1' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('tab1')}>All</a>
          <a className={active === 'tab2' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('tab2')}>Company</a>
          <a className={active === 'tab3' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('tab3')}>Home</a>
        </li>
      </ul>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Content</th>
            <th scope="col">Status</th>
            <th scope="col">Deadline</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas !== null && datas.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.text}</td>
                <td>{data.status}</td>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>

                  <a  className="text-info" title="Sửa công việc" onClick={()=> handleEdit(data, index)}><i className="fas fa-pencil-alt me-3" /></a>
                  <a  className="text-danger" title="Xóa công việc" onClick={() => handleDelete(index)}><i className="fas fa-trash-alt" /></a>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}
export default Content;