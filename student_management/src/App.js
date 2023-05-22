import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/Liststudent";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  //  Ẩn hiện form
  const handleAddstudent = () => {
    setShowForm(!showForm);
  };
// 
  const handlePushData = (student) => {
    // Kiểm tra Student Data có rỗng hay không để ADD
    if(
      !student.id ||
      !student.name ||
      !student.age ||
      !student.sex ||
      !student.birthday ||
      !student.birthplace ||
      !student.address)
      { 
        setError("Vui lòng nhập đầy đủ thông tin")
        return;
    }

    let isDulicate = false;
    students.forEach((element) => {
      if (element.id === student.id) {
        isDulicate = true;
        setError("Mã sinh viên đã tồn tại");
        return;
      }
    });
    
    if (!isDulicate) {
      setStudents([...students, student]);
      setError("");
    }    
  };

  // Delete students
  const hanldeDelete = (id) => {
    const studentAfer = students.filter((student) => student.id!== id);
    setStudents(studentAfer);
  };

  // Edit truyền qua form
  const hanldeEdit = (student, index) => {
    setId(student.id);
    setName(student.name);
    setAge(student.age);
    setSex(student.sex);
    setBirthday(student.birthday);
    setBirthplace(student.birthplace);
    setAddress(student.address);
    const dataEdit ={
      id,
      name,
      age,
      sex,
      birthday,
      birthplace,
      address, 
      index,
    }
    setDataEdit(dataEdit);
  };
//Update
const handleUpdate = (studentNew, index) => {
  const studentUpdate =[...students];
  const newArray = [...studentUpdate.slice(0, index), studentNew, ...studentUpdate.slice(index + 1)];
  console.log('newArr',newArray);
  setStudents([...newArray])
  

}
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control handleAddstudent={handleAddstudent} />
          <ListStudent students={students} onDelete = {hanldeDelete} onEdit ={hanldeEdit}/>
        </div>
      </div>
      {showForm && <Form handlePushData={handlePushData} onUpdate={handleUpdate} dataEdit={dataEdit} error = {error}/>}
    </div>
  );
}

export default App;
