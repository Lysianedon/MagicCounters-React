import React from "react";
import Button from "./components/Buttons";

//01 - COMPTEUR -----------------------------------

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count : 0,
    };
  }

  render(){

  return (
    <div>
      <h1>Counter : </h1>
      <h2 style={{marginLeft: 53}}>{this.state.count}</h2>

      <Button content=" + " bgColor = "#d81832" onClick={() => {

        this.setState({count : this.state.count + 1})
      }}/>

      <Button content=" - " bgColor = "#90EF90" onClick={() => {
        this.setState({ count : this.state.count - 1 })
      }}/>
      
    </div>
  )
}
}


export default App;