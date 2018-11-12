// code required to create a react component
// react is the default import, whereas component is non-default
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

// components are classes - extend from the react Component class

class App extends Component {
  // give component state
  constructor() {
    super(); // calls constructor function of the extended react Component
    // keys and values that represent underlying components within the state
    this.state = {
      text: '',
      notes: []
    }
  }

// invoked when the component is loaded onto the DOM
  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  submit() {
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
    bake_cookie(cookie_key, this.state.notes);
  }

  clear() {
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
  }
  // render: outlines the jsx that we want to return
  render() {
    return (
      <div>
        <h2>Note App</h2>
        <Form inline>
          <FormControl onChange={event => this.setState({ text: event.target.value }) }/>
          {' '}
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, index) => {
            return (
              <Note key={index} note={note} />
            )
          })
        }
        <hr />
        <Button onClick={() => this.clear()}>Clear Notes</Button>
      </div>
    )
  }
}

// what other files can access from this file
// no need for curly braces when importing
export default App;
