import React, {Component} from 'react';
import classes from '../../assets/style.scss'
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPosts: null
  }

  componentDidUpdate () {
    if (this.props.id) {
      if (!this.state.loadedPosts|| (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)) {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
          this.setState({
            loadedPosts: response.data
          })
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }

  render() {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{textAlign: 'center'}}>Loading!!!</p>;
    }
    if (this.state.loadedPosts) {
      post = (
        <div className={classes.FullPost}>
            <h1>{this.state.loadedPosts.title}</h1>
            <p>{this.state.loadedPosts.body}</p>
            <div className={classes.Edit}>
                <button className={classes.Delete}>Delete</button>
            </div>
        </div>
      ) 
    }
    return post;
  }
}

export default FullPost;