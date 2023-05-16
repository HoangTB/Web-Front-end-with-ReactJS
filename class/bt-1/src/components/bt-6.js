import {Component} from "react";
class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = (
    {
        Text:"",
    }
        )
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({
            Text: e.target.value,
        })
    }
    render(){
        return(
            <div>
                <h2>BT-6</h2>
                <div>
                <button onClick={this.handleClick} value="Thể Thao">Thể Thao</button>
                <button onClick={this.handleClick} value="Văn Hóa">Văn Hóa</button>
                <button onClick={this.handleClick} value="Du lịch">Du lịch</button>
                </div>
                {this.state.Text}
            </div>
        )
    }
}

export default Tabs