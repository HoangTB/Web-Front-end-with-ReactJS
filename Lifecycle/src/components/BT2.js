import React from "react";
class BT2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }
    static getDerivedStateFromProps(props, state){

        if(props.count !== state.count){
    
            console.log(1111,props.count);
            console.log(2222,state.count);
            return{
                count: props.count,
            };
           
        }
        return null;
    }

    render(){

        return <h1>Count: {this.state.count}</h1>

    }
}
export default BT2;