import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './assets/style.scss';
import Blog from './Containers/Blog/blog';
// import axios from 'axios';
import axios from './Axios';

class App extends Component {
  render() {
    return (
      <div className="">
        <Blog />
      </div>
    );
  }
}

axios.interceptors.request.use(request => {
  console.log(request)
  return request
}, error => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  console.log(response)
  return response
}, error => {
  console.log(error);
  return Promise.reject(error);
})

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default App;

let app = document.getElementById('app');

ReactDOM.render(<App />, app);
