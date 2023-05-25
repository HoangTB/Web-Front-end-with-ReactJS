  import React, {useEffect, useState } from "react";
  function Form(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [status, setStatus] = useState("");
    const [datas, setDatas] = useState([]);

    useEffect(() =>{
      setDatas(JSON.parse(localStorage.getItem("datas")) ?? []) ;
    },[])
    const handleChange = (event) => {
      const key = event.target.name;
      switch (key) {
        case "name":
          setName(event.target.value);
          break;
        case "type":
          setType(event.target.value);
          break;
        case "date":
          setDate(event.target.value);
          break;
        case "text":
          setText(event.target.value);
          break;
          case "status":
            setStatus(event.target.value);
            break;
      }
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const data ={
        name: name,
        type: type,
        date: date,
        text: text,
        status: status,
      }
      localStorage.setItem("datas", JSON.stringify([...datas,data]));
      props.updateData();
      props.closeForm();
     };
  
    return (
      <form
        className="align-items-center mb-4 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex-fill">
          <input
            type="text"
            id="form2"
            className="form-control m-2"
            placeholder="Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <select
            className="form-control m-2"
            value={type}
            name="type"
            onChange={handleChange}
          >
            <option value="">--Vui lòng chọn--</option>
            <option value="Company">Company</option>
            <option value="Home">Home</option>
          </select>
          <input
            type="date"
            id="form2"
            className="form-control m-2"
            value={date}
            name="date"
            onChange={handleChange}
          />
          <textarea
            className="form-control m-2"
            placeholder="Nội dung công việc"
            value={text}
            name="text"
            onChange={handleChange}
          ></textarea>
          <select
            className="form-control m-2"
            value={status}
            name="status"
            onChange={handleChange}
          >
            <option value="">--Vui lòng chọn--</option>
            <option value="Đã Hoàn Thành">Đã Hoàn Thành</option>
            <option value="Chưa Hoàn Thành">Chưa Hoàn Thành</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info ms-2">
          Thêm
        </button>
      </form>
    );
  }
  export default Form;
