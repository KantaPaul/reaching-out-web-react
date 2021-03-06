import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../Axios';
import clasess from '../../assets/style.scss';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }

    postDatahandler = () => {
        let data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post('/posts/', data)
            .then(response => {
                console.log(response)
            })
    }

    render () {
        return (
            <div className={clasess.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option>Select</option>
                    <option value="Kanta Paul">Kanta Paul</option>
                    <option value="Pobon Paul">Pobon Paul</option>
                </select>
                <button onClick={this.postDatahandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;