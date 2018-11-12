// code required to create a react component
// react is the default import, whereas component is non-default
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

// components are classes - extend from the react Component class

class App extends Component {
  // render: outlines the jsx that we want to return
  render() {
    return (
      <div>
        <h2>Note App</h2>
        <Form>
          <FormControl />
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

// what other files can access from this file
// no need for curly braces when importing
export default App;
