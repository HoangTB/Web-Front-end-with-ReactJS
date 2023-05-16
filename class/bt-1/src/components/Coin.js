import { Component } from "react";
class Coins extends Component {
    constructor() {
        super();
        this.state = {
            action: 1,
            left: 0,
            right: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const randomInt = Math.floor(Math.random() * 100) + 1;
        if (randomInt % 2 === 0 ) {
            this.setState((e) => ({
                action: 2,
                left: e.left + 1,
              
            }))
        } else {
            this.setState((e) => ({
                action: 1,
                right: e.right + 1,
             
            }))
        }
    }
    render() {
        return (
            <div>
                <h2>BT-10</h2>
                <h3>Let’s flip a coin</h3>
                <img src={this.state.action === 1 ? './2017-D_Roosevelt_dime_obverse_transparent.png' : './US_One_Cent_Obv.png'} alt='image' style={{ width: '150px' }} /><br />
                <button onClick={this.handleClick}>Flip</button>
                <p>Left : {this.state.left}</p>
                <p>Right: {this.state.right}</p>
            </div>
        )
    }
}
export default Coins;