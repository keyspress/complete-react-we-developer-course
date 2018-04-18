

// const state = {
//   visible: false
// };

// const onButtonToggle = () => {
//   state.visible = !state.visible;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visbility Toggle</h1>
//       <button onClick={onButtonToggle}>Show Details</button>
//       <p>{state.visible ? "AHHH! Don't you know how to knock!?!" : null}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// render();
//**************************************************************
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visbility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <p>Hey. These are some details you can now see!</p>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();

class Visbility extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <p>Hey. The state says you can see this now.</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Visbility />, document.getElementById('app'));