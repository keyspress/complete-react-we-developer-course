console.log('App.js is running');


const app = {
  title: 'Indecision App from the object',
  subtitle: 'This some info from the object',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Jim',
  age: 500,
  location: 'Podunk Island'
};

function getLocation(location) {
  if(location) {
    return <p>Location: {user.location}</p>;
  } 
}

const challengeTemplate = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);