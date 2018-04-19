class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  
  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const str = JSON.parse(json);
      const num = parseInt(str, 10);
      if(!isNaN(num)) {
        this.setState(() => ({ count: num }));
      }      
    } catch (e) {
      //Do nothing
    }    
  }
  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.count);
    localStorage.setItem('count', json);
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    // ***Old Way***
    // this.setState({
    //   count: 0
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   console.log('addOne');
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   console.log('minusOne')
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   console.log('reset');
//   count = 0;
//   renderCounterApp();
// };


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();