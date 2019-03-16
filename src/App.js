import React, { Component } from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

const client = new GraphQLClient({
  url: 'https://api.graph.cool/simple/v1/cjtc2bwht4gbc0161re6w6myp'
});

class App extends Component {
  render() {
    return (
      <ClientContext.Provider value={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <User />
          </header>
        </div>
      </ClientContext.Provider>
    );
  }
}

export default App;
