
import { useRef } from 'react';
import Table from 'react-bootstrap/Table';

function Carts(props) {
  const listPhoneCarts = props.arrayPhone;
  let sum = 0;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>  
          <th>Price</th>
        </tr>
      </thead>
      <tbody >
        {
          listPhoneCarts.map((phone, index) => {
            sum += phone.price
            return(
              <tr key={index+1}>
              <td><img src={phone.image} style={{width:"60px"}} /></td>
              <td className='pt-4'>{phone.name}</td>
              <td className='pt-4'><input type='number' id='quantity' value={phone.quantity}/></td>
              <td className='pt-4'>{phone.price}$</td>
              
              </tr> 
     
            )

            
          })
        }
         <tr>
          <td colSpan="4" className='d-flex'><h3>Total:{sum} $</h3></td>
        </tr>
    </tbody>
  
    </Table>
  );
}

export default Carts;