import { React, useEffect, useState } from "react";

function Form({ handlePushData, dataEdit,onUpdate, error}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Nam");
  const [birthday, setBirthday] = useState("");
  const [birthplace, setBirthplace] = useState("Hà Nội");
  const [address, setAddress] = useState("");
  const [editMode, setEditMode] = useState(false);
  const errorContent = error;
  console.log(errorContent);
  
  // Điều kiện để hiện lại nội dung cần edit lên lại form
  useEffect(() => {
    if (dataEdit) {
      setEditMode(true);
      setId(dataEdit.id);
      setName(dataEdit.name);
      setAge(dataEdit.age);
      setAddress(dataEdit.address);
      setSex(dataEdit.sex);
      setBirthplace(dataEdit.birthplace);
      setBirthday(dataEdit.birthday);
      setAddress(dataEdit.address);
    }
  }, [dataEdit]);

  // Cái này sẽ lấy tất cả dữ liệu từ form để ADD
  const handleClick = (event) => {
    const key = event.target.name;
    switch (key) {
      case "id":
        setId(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      case "sex":
        setSex(event.target.value);
        break;
      case "birthday":
        setBirthday(event.target.value);
        break;
      case "birthplace":
        setBirthplace(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
    }
  };

  // Khi Submit sẽ thêm tât cả dữ liệu vào Object
  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: id,
      name: name,
      age: age,
      sex: sex,
      birthday: birthday,
      birthplace: birthplace,
      address: address,
    };
    handlePushData(student)
    setId("");
    setName("");
    setAge("");
    setSex("");
    setBirthday("");
    setBirthplace("");
    setAddress("");
  };
  // Update
  const handleUpdate = (e) => {
    const NewStudentUpdate = {
      id: id,
      name: name,
      age: age,
      sex: sex,
      birthday: birthday,
      birthplace: birthplace,
      address: address,
    }
      onUpdate(NewStudentUpdate, dataEdit.index)
  }

  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  value={id}
                  type="text"
                  name="id"
                  className="form-control"
                  onChange={handleClick}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleClick}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  value={age}
                  type="text"
                  className="form-control"
                  name="age"
                  onChange={handleClick}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  value={sex}
                  className="form-control"
                  name="sex"
                  onChange={handleClick}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  value={birthday}
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birthday"
                  onChange={handleClick}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  value={birthplace}
                  className="form-control"
                  name="birthplace"
                  onChange={handleClick}
                >
                  <option value={"Hà Nội"}>Hà Nội</option>
                  <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                  <option value={"Đà Nẵng"}>Đà Nẵng</option>
                  <option value={"Quảng Ninh"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  value={address}
                  className="form-control"
                  name="address"
                  onChange={handleClick}
                />
              </div>
            </div>
            {!editMode && (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )} <span style={{color:"red"}}>{errorContent}</span>
          </form>
          {editMode && (
            <button onClick={handleUpdate} className="btn btn-primary me-2">
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
