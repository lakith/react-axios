import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <BrowserRouter basename="/heliumX">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
