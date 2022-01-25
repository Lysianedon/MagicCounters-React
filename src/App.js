import React from "react";
import Counter from "./components/Counter.js";


//01 - COMPTEUR -----------------------------------

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count : 0,
    };
  }

  render(){
    
    const counter1 = {...this.state, increment: this.state.count + 1, substract: this.state.count - 1};
    const counter2 = {...this.state, increment: this.state.count + 1, substract: this.state.count - 1};

    return (
      <div>
        <h1>COUNTER: </h1>
        <Counter className="counter1"/>

        <Counter className="counter2"/>
        <p>Made with <span>React</span> </p>
      </div>
    )
}
}

export default App;