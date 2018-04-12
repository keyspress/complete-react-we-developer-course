console.log('App.js is running');


var app = {
  title: 'Indecision App from the object',
  subtitle: 'This some info from the object'
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Jim',
  age: 5000,
  location: 'Podunk Island'
};

var challengeTemplate = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);