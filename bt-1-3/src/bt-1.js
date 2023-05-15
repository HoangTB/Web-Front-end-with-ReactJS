import React, {Component} from 'react';
import './css.css';

class List extends Component {
    render(){
        const list = ["HTML","Javascrip","Python","C#"]
        return (
            <div className='bt1'>
                <h1>BT-1</h1>
                <h2>DANH SÁCH KHÓA HỌC</h2>
                <ul>
                    {list.map((item, i ) => (<li key={i}>{item}</li>))}
                </ul>
            </div>
        )
    }
}
export default List;