import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    // this.num1 = "";
    // // this.num2 = "";
    // this.num1 = "";
    // this.num2 = "";
    this.state = {num1: "", num2: "", result: 0};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
    
  }

  setNum1(e) {
    // debugger;
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }


  setNum2(e) {
    // debugger;
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }


  add(e) {
    e.preventDefault();
    this.setState({result: this.state.num1  + this.state.num2});
  }
  

  clear() {
    this.setState({
      result: 0,
      num1: "",
      num2: ""
    })
  }


  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.add}>Add </button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
