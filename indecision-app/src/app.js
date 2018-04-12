console.log('App.js is running');

var template = <h1>Indecision App</h1>;
// var template = React.createElement(
//   "h1",
//   { id: "someid" },
//   "This is JSX from app.js"
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);