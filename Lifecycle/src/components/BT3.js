import React from "react";
class BT3 extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count:0
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(111,nextState.count);
        console.log(222,this.state.count);
        if(nextState.count !== this.state.count){
            return true;
        }
        return false;
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=> this.setState({count: this.state.count +1 })}>Increase</button>
            </div>
        )
    }
}
export default BT3;