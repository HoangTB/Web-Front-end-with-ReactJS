 import {Component} from 'react';
class Button2 extends Component { 
    render(){
        console.log(this.props);
        return (
            <div>
                <h2>BTH-2</h2>
                <button style={{color:this.props.color, background:this.props.background, width:this.props.width, height:this.props.height}}>{this.props.text}</button>
            </div>
        )
    }
}
export default Button2;