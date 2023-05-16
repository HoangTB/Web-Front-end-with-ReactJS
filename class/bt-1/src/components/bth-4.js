import { Component } from "react";

class Button4 extends Component{
    constructor(props){
        super(props);
        this.state= {
            count: 0,
        }
        this.handleCount = this.handleCount.bind(this);
    }
    handleCount(){
        this.setState({
            count: this.state.count + 1,
        });
    }
    render(){
        return(
            <div>
                <h2>BTH-4</h2>
                <p>Số lần bấm của bạn là: {this.state.count} </p>
                <button onClick={this.handleCount}>Click</button>
            </div>
        )
    }
}

export default Button4