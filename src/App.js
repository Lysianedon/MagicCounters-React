import React from "react";
import Counter from "./components/Counter.js";


//01 - COMPTEUR -----------------------------------

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count : 0,
      count2: 0,
    };

    // Bind functions
    this.increment = this.increment.bind(this);
    this.increment2 = this.increment2.bind(this);
    this.incrementBoth = this.incrementBoth.bind(this);
    this.substract = this.substract.bind(this);
    this.substract2 = this.substract2.bind(this);
    this.substractBoth = this.substractBoth.bind(this);
  }

  //Increment functions :
  increment() {
    this.setState((prevState) => {
      return {
        count : prevState.count + 1
      };
    });
  }

  increment2() {
    this.setState((prevState) => {
      return {
        count2 : prevState.count2 + 1
      };
    });
  }

  incrementBoth() {
    this.setState((prevState) => {
      return {
        count : prevState.count + 1,
        count2 : prevState.count2 + 1
      }
    })
  }

  // Substract functions:
  substract() {
    this.setState((prevState) => {
      return {
        count : prevState.count - 1
      };
    });
  }

  substract2(){
    this.setState((prevState) => {
      return {
        count2 : prevState.count2 - 1
      };
    });
  }

  render(){
    
    // const counter1 = {...this.state, increment: this.state.count + 1, substract: this.state.count - 1};
    // const counter2 = {...this.state, increment: this.state.count2 + 1, substract: this.state.count2 - 1};

    return (
      <div>
        <h1>COUNTER: </h1>

        {
          this.state.count === this.state.count2 ? ( <Counter count={this.state.count} increment={this.increment} substract={this.substract}/>
            <Counter count={this.state.count2} increment={this.increment2} substract={this.substract2}/>)
        }

        <Counter count={this.state.count} increment={this.increment} substract={this.substract}/>
        <Counter count={this.state.count2} increment={this.increment2} substract={this.substract2}/>
        <p>Made with <span>React</span> </p>
      </div>
    )
}
}

export default App;