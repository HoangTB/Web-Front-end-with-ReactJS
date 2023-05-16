import { Component } from "react";

class Button5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);

    }
    handleChange(event) {   
        this.setState({ textInput: event.target.value, })
    }
    
    handelSubmit(event){
        event.preventDefault()
        alert("Bạn vừa nhập: " + this.state.textInput);
    }
    render() {
        return (
            <div>
                <h2>BTH-5</h2>
                <form onSubmit={this.handelSubmit}>
                    <input placeholder="Hãy nhập vào" value={this.state.textInput} onChange={this.handleChange} /><> </>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Button5;