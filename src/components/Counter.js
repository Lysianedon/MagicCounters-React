import React from "react";
import Button from "./Buttons";
import "../styles/counter.css"


class Counter extends React.Component {

    // constructor() {
    //     super();
    
    //     this.state = {
    //       count : 0,
    //     };
    // }
    
    render() {
        
        // const obj = {...this.state, increment: this.state.count + 1, substract: this.state.count - 1};

        return (

            <div className="div">

                {/* Making a condition so that the counter can't exceed 100 */}

                {
                    this.props.count < 100 ? (
                        <Button content=" + " bgColor = "#90EF90" onClick={this.props.increment} />
                    ) : (

                        <Button content=" + " bgColor = "#90EF90" onClick={() => {
                            this.setState({count : this.props.count})
                        }} />
                    )
                }

                <h2>{this.props.count}</h2>

                {/* Making a condition so that the counter can't go below 0 */}

                {
                    this.props.count >= 1 ? ( <Button content=" - " bgColor = "#d81832" onClick={this.props.substract}/>) :  ( <Button content=" - " bgColor = "#d81832" onClick={this.props.count}/>)
                }

            </div>
        )
    }
}



export default Counter ;