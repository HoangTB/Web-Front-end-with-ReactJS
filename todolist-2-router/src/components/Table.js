import { useEffect, useState } from "react";
import { useLocation, } from "react-router-dom";

function Table(props) {
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("datas")) ?? []
  );
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    if(path === "/"){
        setDatas(JSON.parse(localStorage.getItem("datas"))?? []);
    }
    if(path === "/company"){
      const getLocal = JSON.parse(localStorage.getItem("datas")) || [];
      const filterData = getLocal.filter(data => data.type === "Company")
      setDatas(filterData);
    }
    if(path === "/home"){
        const getLocal = JSON.parse(localStorage.getItem("datas")) || [];
        const filterData = getLocal.filter(data => data.type === "Home")
        setDatas(filterData);
    }
  }, [props.update,path]);

  
  // Delete
  const handleDelete = (index) => {
    let datasDel = [...datas];
    const newData = [...datasDel.slice(0, index), ...datasDel.slice(index + 1)];
    localStorage.setItem("datas", JSON.stringify(newData));
  };
  return (
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
        {datas !== null &&
          datas.map((data, index) => {
            

            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.text}</td>
                <td>{data.status}</td>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>
                  <a className="text-info" title="Sửa công việc">
                    <i className="fas fa-pencil-alt me-3" />
                  </a>
                  <a
                    className="text-danger"
                    title="Xóa công việc"
                    onClick={() => handleDelete(index)}
                  >
                    <i className="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
