import React from "react";
import Buttons from "./components/Buttons";

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

      <Buttons content=" + " bgColor = "#d81832" onClick={() => {
        this.setState({count : "test +"})
      }}/>

      <Buttons content=" - " bgColor = "#90EF90" onClick={() => {
        this.setState({ count : "test - "})
      }}/>
      
    </div>
  )
}
}


export default App;