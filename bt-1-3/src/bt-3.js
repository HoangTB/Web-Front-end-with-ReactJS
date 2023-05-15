import { Component } from "react";
import './css.css';
class Time extends Component{
    constructor(){
        super();
        this.state = {
            hour:0,
            minute:0,
            second:0,
        };
    }
    render(){
        const currenDate = new Date();
        const currenHour = currenDate.getHours();
        const currenMinute = currenDate.getMinutes();
        const currenSecond = currenDate.getSeconds();
        const currenTimeString = `${currenHour}:${currenMinute}:${currenSecond}`
        // setInterval(()=> {
        //     const today = new Date();
        //     this.setState({
        //         hour: today.getHours,
        //         minute: today.getMinutes,
        //         second: today.getSeconds,
        //     })
        // },1000)
        return (
            <div className="bt3">
                <h1>BT-3</h1>
                <h2>Xin chào các bạn</h2>
                <h3>Bây giờ là {currenTimeString}</h3>
                {/* <Oclock data={this.state}/> */}
            </div>
        )
    }
}

// class Oclock extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return 
//     }
// }
export default Time