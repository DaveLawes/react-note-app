## Note App using React

Note app built using React (from the create-react-app package). Users can add notes to their list and clear all notes. Notes persist across sessions.

## How to Use

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Testing

For unit tests we can use Jest - this comes as part of the create-react-app. To test the components features we can use Enzyme; this allows use to use a library of functions for mocking component creation and behaviour. 

To install enzyme: `npm install enzyme react-test-rendered --save-dev`. Save as a dev dependency because we don't need this library as part of the production code. For React >16 we need enzyme adapters: `npm install enzyme-adapters-react-16 --save-dev`. To install adapters correctly we also need two extra files: src/tempPolyfills.js and src/setupTests.js (see example code here for the content). Essentially these files ensure the enzyme adapters are correctly configured for the tests.

In the tests we need to `import { mount } from 'enzyme'`, this allows us to access enzyme libraries to mock the actual mount of a component onto the DOM.

#### Helpers

Some helpful helper methods:
- .debug(): use this in a console.log() to see a print out of the component state
- .find(tag).text(): returns the text value contained within the specified tag
- .simulate(): simulates user events such as inputting values or clicking a button

#### Test Coverage

Jest comes with a built-in coverage tool. Run `npm test -- --coverage` to get the results.

## Tech Stuff

- ES6 syntax for creating classes was used, eg:

```
class Note extends Component {
  constructor() {}
}
```

- The `extends` keyword provides inheritance from parent classes. A react component should always inherit from React's base Component class.
- Imports and exports allow files to be shared.
- Arrow functions do not create their own 'this', therefore the parent 'this' can be used directly. With named functions you have to `.bind(this)` to ensure the scope of the function is referenced correctly.
- Destructing objects allows you to directly declare variables whose names match key names within objects.
- JavaScript XML (JSX) is the primary way to define component structure in React.
- State = underlying component data.
- Props = data received from parent components.
- Lifecycle hooks = methods that fire at specific times in the life of a component (e.g. componentDidMount is fired when a component is first rendered on a page).
- Cookies can be used to persist data across sessions. The package `sfcookies` was used in this app to write, read and delete cookie keys.


