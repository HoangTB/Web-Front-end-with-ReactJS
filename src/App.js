import { useState } from 'react';
import './App.css';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
const [arrayPhone, setArraysPhone] = useState([]);
const addPhone = (phone) =>{
let isDulicate = false;
const newData = arrayPhone.map((item, index)=>{
  if(item.id === phone.id){
    item.quantity ++;
    item.price = phone.price * item.quantity;
    isDulicate = true;
  }
  return item;

})
if(isDulicate){
     setArraysPhone(newData);
  } else{
    setArraysPhone([...arrayPhone, phone])
  }
}
console.log(arrayPhone);

  return (
<div>
  <Header/>
  <ProductList onAddPhone ={addPhone}/>
  <Carts arrayPhone = {arrayPhone}/>
  <Footer />
</div>
 
  );
}

export default App;
