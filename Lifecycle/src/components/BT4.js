import React from "react";
class BT4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}

    }
    handleIncrement = () =>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement = () =>{
        this.setState({count:this.state.count-1})
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.count === 10){
            alert(" Count reached maximum limit")
        }
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }

}
export default BT4;