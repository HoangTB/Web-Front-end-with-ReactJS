import { Component } from "react";

class Button6 extends Component{
    constructor(props){
        super(props);
        this.state ={
            number:"",
            array:[],
            total: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            number: e.target.value,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            array:[...this.state.array, parseInt(this.state.number) ],
            total:this.state.total + parseInt(this.state.number) ,
            number:"",
        })
    }

    render(){
        return(
            <div>
                <h2>BTH-6</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.number} onChange={this.handleChange}/>
                    <button typeof="submit">Total</button>
                </form>
                <p>Kết quả:</p>
                <div style={{color:"red"}}>
                    {this.state.array.join("+")+ "=" + this.state.total}
                </div>
            </div>
        )
    }
}
export default Button6