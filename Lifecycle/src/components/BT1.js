import React from "react";
class BT1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count +1})}>Increase</button>
            </div>
        )
    }
}
export default BT1;