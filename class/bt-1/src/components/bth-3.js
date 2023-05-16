import { Component } from "react";

class Button3 extends Component{
    constructor(){
        super();
        this.state={value:0}
    }
    render(){
        return(
            <div>
                 <h2>BTH-3</h2>
                <button onClick={()=> this.setState({value:this.state.value +1 })}>Click Me</button>
                <p>{this.state.value}</p>
            </div>
          
        )
    }
}

export default Button3;