import Table from 'react-bootstrap/Table';
function Features (){
    return(
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Hoang</td>
          <td>Truong</td>
          <td>@tbhoang</td>
        </tr>
      </tbody>
    </Table>
    )
}
export default Features;