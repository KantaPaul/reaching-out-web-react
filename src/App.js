import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './assets/style.scss';
import Blog from './Containers/Blog/blog';

class App extends Component {
  render() {
    return (
      <div className="">
        <Blog />
      </div>
    );
  }
}

export default App;

let app = document.getElementById('app');

ReactDOM.render(<App />, app);
