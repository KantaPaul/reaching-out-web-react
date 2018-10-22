import React, {Component} from 'react';
import axios from 'axios';
import classes from '../../assets/style.scss';
import Post from '../../Components/Post/Post';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
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
        console.log(error)
      })
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    })
  }
  
  render () {
    let post = this.state.posts.map(post => {
      return <Post 
        key={post.id} 
        title={post.title} 
        body={post.body} 
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)} 
      />
    })

    return (
      <div>
          <section className={classes.Posts}>
            {post}
          </section>
          <section>
            <FullPost id={this.state.selectedPostId} />
          </section>
          <section>
            <NewPost />
          </section>
      </div>
    )
  }
}

export default Blog;