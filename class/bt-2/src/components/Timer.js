import {Component} from 'react';
class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:0,
            isRunning: false,
        };
        this.timerInterval = null;
    };
    startTimer = () => {
        if(!this.state.isRunning){
            this.timerInterval = setInterval(() => {
                this.setState((prevState) => ({
                    time: prevState.time + 1,
                }))
            }, 1000);
            this.setState({
                isRunning:true,
            })
        }
    };
    stopTimer = () => {
        clearInterval(this.timerInterval);
        this.setState({
            isRunning:false,
        });
    };
    resetTimer = () => {
        this.stopTimer();
        this.setState({
            time:0,
        });
    }

    render(){
        const {time, isRunning} = this.state;
        return(
            <div>
                <p>Time: {time} giây</p>
                <button onClick={this.startTimer} disabled={isRunning}>Start</button>
                <button onClick={this.stopTimer} disabled={!isRunning}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
         
        )
    }
}
export default Timer