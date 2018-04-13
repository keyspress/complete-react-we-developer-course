console.log('App.js is running');


const app = {
  title: 'Indecision App from the object',
  subtitle: 'This some info from the object',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAllHandler = () => {
  app.options = [];
  renderTemplate();
}

const numbers = [55, 101, 1000];

const renderTemplate = () => {
  const template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
    <p>{app.options.length}</p>
    <button onClick={removeAllHandler}>Remove All</button>
    <ol>
      {app.options.map((item) => <li key={item}>{item}</li>)}
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
  );
  ReactDOM .render(template, appRoot);
}


const appRoot = document.getElementById('app');

renderTemplate();