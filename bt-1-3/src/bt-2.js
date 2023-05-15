import { Component } from "react";
import './css.css';
// console.log(Component);
 class Sum extends Component{
    constructor(){
        super();
        this.state = {
            a:0,
            b:0,
        };
    }
    handelInput = (event) =>{
        // const{name, value} = event.target;
        // this.setState({[name]: Number(value)});
        this.setState({ [event.target.name]: parseInt(event.target.value) });
    }

    Sumlist = () => {
        const {a, b} = this.state;
        const sum = a + b;
        this.setState({sum});
    }
    render(){
        const {a, b, sum} = this.state;
        return(
            <div className="bt2">
                <h1>BT-2</h1>
                <input placeholder="Nhập số A" value={a}  name="a" onChange={this.handelInput}/>
                <input placeholder="Nhập số B" value={b}  name="b" onChange={this.handelInput}/>
                <button onClick={this.Sumlist}>Tính tổng</button>
                <p>Tổng là : {sum}</p>
            </div>
        );
    }
 }

// class Sum2 extends Component{
//     constructor(){
//         super();
//         this.state ={a:0, b:0};
//     }
//     render(){
//         <div className="bt22">
//             <h1>BT-2-Cách 2</h1>
//             <input onChange={(e)=> this.setState({a: Number(e.target.value)})} />
//             <input onChange={(e)=> this.setState({b: Number(e.target.value)})} />
//             <p>Tổng là : {this.setState.a + this.setState.b}</p>
//         </div>
//     }
// }

 export default Sum;