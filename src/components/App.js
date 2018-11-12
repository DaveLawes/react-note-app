// code required to create a react component
// react is the default import, whereas component is non-default
import React, { Component } from 'react';

// components are classes - extend from the react Component class

class App extends Component {
  // render: outlines the jsx that we want to return
  render() {
    return (
      <div>
        <h2>Note App</h2>
      </div>
    )
  }
}

//  what other files can access from this file
export default App;
