import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard.container'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
         {/* {<Route path='/' Component={Dashboard} />} */}
        <Dashboard />
      </BrowserRouter>
    );
  }
}

export default App;
