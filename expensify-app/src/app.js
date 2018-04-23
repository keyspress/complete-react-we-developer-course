import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is the Dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    This is the Add Expense Page
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the Edit Expense Page
  </div>
);

const HelpPage = () => (
  <div>
    This is the Help Page
  </div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to='/'>Go Home User. You are drunk.</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));