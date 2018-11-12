// code required to create a react component
// react is the default import, whereas component is non-default
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

// components are classes - extend from the react Component class

class App extends Component {
  // give component state
  constructor() {
    super(); // calls constructor function of the extended react Component
    // keys and values that represent underlying components within the state
    this.state = {
      text: ''
    }
  }
  // render: outlines the jsx that we want to return
  render() {
    return (
      <div>
        <h2>Note App</h2>
        <Form>
          <FormControl onChange={event => this.setState({ text: event.target.value })}/>
          <Button onClick={() => console.log(this.state)}>Submit</Button>
        </Form>
      </div>
    )
  }
}

// what other files can access from this file
// no need for curly braces when importing
export default App;
