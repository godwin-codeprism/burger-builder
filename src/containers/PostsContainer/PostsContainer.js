import React, { Component } from "react";
import axios from "axios";

import Postcard from "../../components/Postcard/Postcard";
import css from "./PostsContainer.css";
import PostBox from "../../components/Postbox/Postbox";
class PostContainer extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({ posts: res.data.splice(0, 4) });
      })
      .catch(err => {
        console.log(err);
      });
  }
  SubmitPostHandler = data => {
    this.setState(prevstate => {
      prevstate.posts.push(data);
      return { posts: prevstate.posts };
    });
  };
  render() {
    return (
      <div
        className={css.PostsContainer}
        style={
          this.props.showPosts ? { display: "block" } : { display: "none" }
        }
      >
        <h3 style={{ textAlign: "center" }}>Your posts</h3>
        <div className={css.card}>
          <br />
          {this.state.posts.map((post, index) => {
            return (
              <Postcard
                key={post.id}
                title={post.title}
                body={post.body}
                author="Godwin"
              />
            );
          })}
        </div>
        <br />
        <br />
        <PostBox submitPost={this.SubmitPostHandler} />
      </div>
    );
  }
}

export default PostContainer;
