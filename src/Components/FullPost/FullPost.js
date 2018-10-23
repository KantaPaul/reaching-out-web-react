import React, {Component} from 'react';
import classes from '../../assets/style.scss'
// import axios from 'axios';
import axios from '../../Axios';

class FullPost extends Component {
  state = {
    loadedPosts: null
  }

  componentDidUpdate () {
    if (this.props.id) {
      if (!this.state.loadedPosts|| (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)) {
        axios.get('/posts/' + this.props.id)
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

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id)
          .then(response => {
            console.log(response)
          })
  }

  render() {
    let post = null;
    if (!this.props.error) {
      post = <p style={{textAlign: 'center'}}>Please select a Post!</p>
    }
    if (this.props.id) {
      post = <p style={{textAlign: 'center'}}>Loading!!!</p>;
    }
    if (this.state.loadedPosts) {
      post = (
        <div className={classes.FullPost}>
            <h1>{this.state.loadedPosts.title}</h1>
            <p>{this.state.loadedPosts.body}</p>
            <div className={classes.Edit}>
                <button onClick={() => this.deletePostHandler(this.state.loadedPosts.id)} className={classes.Delete}>Delete</button>
            </div>
        </div>
      ) 
    }
    return post;
  }
}

export default FullPost;