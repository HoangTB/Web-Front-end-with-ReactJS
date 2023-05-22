  function ListStudent (props){
    const students = props.students;
    console.log("list" ,students);
    // Gọi hàm Delete
    const hanldeDelete = (student) => {
      props.onDelete(student);
    }

    // Gọi hàm Edit
    const hanldeEdit = (student,index) => {
      props.onEdit(student, index);
    } 
      return (
          <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map((student, index) => {
                    return(
                      <tr key={student.id}>
                      <td>{index +1}</td>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.sex}</td>
                      <td>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                          >
                            Xem
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-icon-text" onClick ={()=> hanldeEdit(student, index)}
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-icon-text" onClick={() => hanldeDelete(student.id)}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                    )}
                  )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      )
  }
  export default ListStudent;