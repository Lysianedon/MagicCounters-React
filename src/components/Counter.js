import React from "react";
import Button from "./Buttons";

class Counter extends React.Component {

    constructor() {
        super();
    
        this.state = {
          count : 0,
          //   decrement : this.state.count - 1
        };
    }
    
    render() {
        
        
        const obj = {...this.state, increment: this.state.count + 1, decrement: this.state.count - 1};
        return (

            <div>
                <h2 style={{marginLeft: 53}}>{this.state.count}</h2>

                <Button content=" + " bgColor = "#d81832" onClick={() => {
                    this.setState({count : obj.increment})
                }}/>

                <Button content=" - " bgColor = "#90EF90" onClick={() => {
                this.setState({ count : obj.decrement })
                }}/>
            </div>
        )
    }
}



export default Counter ;