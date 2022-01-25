import React from "react";


class Buttons extends React.Component {


    render(){

        return (
            <button style={{backgroundColor : this.props.bgColor, width : 50, height: 50, borderRadius: 60, fontSize: 25, margin: 10}} > {this.props.content} </button>
        )
    }
}





export default Buttons;