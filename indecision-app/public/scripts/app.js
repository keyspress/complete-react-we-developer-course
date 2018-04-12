'use strict';

console.log('App.js is running');

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
// var template = React.createElement(
//   "h1",
//   { id: "someid" },
//   "This is JSX from app.js"
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
