import React, {Component} from 'react';
// import axios from 'axios';
import axios from '../../Axios';
import classes from '../../assets/style.scss';
import Post from '../../Components/Post/Post';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount () {
    axios.get('/posts')
      .then(response => {
        let posts = response.data.slice(0, 6);
        let updatepost = posts.map(post => {
          return {
            ...post,
            author: 'Kanta Paul Pobon'
          }
        })
        this.setState({
          posts: updatepost
        })
        // console.log(response)
      })
      .catch(error => {
        // console.log(error)
        this.setState({
          error: true
        })
      })
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    })
  }
  
  render () {
    let posts = <p>Something Went Wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post 
          key={post.id} 
          title={post.title} 
          body={post.body} 
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)} 
        />
      })
    }

    return (
      <div>
          <section className={classes.Posts}>
            {posts}
          </section>
          <section>
            <FullPost id={this.state.selectedPostId} error={this.state.error} />
          </section>
          <section>
            <NewPost />
          </section>
      </div>
    )
  }
}

export default Blog;