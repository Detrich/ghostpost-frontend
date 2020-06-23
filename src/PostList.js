import React from "react";

let Domain = "http://localhost:8000/api/posts/";

class PostList extends React.Component {
  upvoteHandleClick = (id) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(Domain + id + "/upVote/", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          Posts: res,
        });
        this.props.update();
      });
    this.props.history.push(this.props.location.pathname);
  };

  downvoteHandleClick = (id) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(Domain + id + "/downVote/", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          Posts: res,
        });
        this.props.update();
      });
    this.props.history.push(this.props.location.pathname);
  };

  render() {
    return (
      <div>
        {this.props.Posts.map((s) => {
          return (
            <li key={s.id}>
              <span style={{ fontSize: "25px" }}>
                {s.roastorboast === "R" ? "Roast" : "Boast"}
              </span>
              <ul key="content">{s.content}</ul>
              <ul key="made">Created at : {s.createdAt}</ul>
              <ul key="score">score : {s.score}</ul>
              <ul key="upvote">upvotes : {s.upVotes}</ul>
              <ul key="downvote">downvotes : {s.downVotes}</ul>
              <button onClick={() => this.upvoteHandleClick(s.id)}>
                upvote
              </button>
              <button onClick={() => this.downvoteHandleClick(s.id)}>
                downvote
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default PostList;
