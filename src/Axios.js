import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;