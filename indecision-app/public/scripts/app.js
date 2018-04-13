'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App from the object',
  subtitle: 'This some info from the object',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var removeAllHandler = function removeAllHandler() {
  app.options = [];
  renderTemplate();
};

var numbers = [55, 101, 1000];

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'You have no options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAllHandler },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (item) {
        return React.createElement(
          'li',
          { key: item },
          item
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderTemplate();
