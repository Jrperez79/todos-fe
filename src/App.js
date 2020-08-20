import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage.js';
import HomePage from './HomePage.js';
import TodosPage from './TodosPage.js';
import './App.css';

export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN')
  }

  handleToken = (token) => {
    this.setState({ token: token })

    localStorage.setItem('TOKEN', token)
  }

  handleSignOut = () => {
    this.setState({ token: '' });

    localStorage.setItem( 'TOKEN', '')
  }
  render() {
  return (
    <div>
      <header>
    <Router>
      <main>
      <div className="header">
          {
            this.state.token && 
            <>
            <Link to='/todos'>Go To Your Todos List</Link>
            <Link to='/'>Home</Link>
            <Link to='/login'>
                <button onClick={this.handleSignOut}>Log Out</button>
            </Link>
            </>
          }
      </div>
      <div>
      <Switch>
        <Route 
            path="/" 
            exact
            render={(routerProps) => <HomePage {...routerProps} />} 
        />
        <Route 
            path="/login" 
            exact
            render={(routerProps) => <AuthPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
        />
        <Route 
            path="/todos" 
            exact
            render={(routerProps) => <TodosPage token={this.state.token} {...routerProps} />} 
        />
      </Switch>
      </div>
      </main>
    </Router>
  </header>
  </div>
  );
  }
}
