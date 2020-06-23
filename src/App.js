import React from "react";
import New from "./New";
import PostList from "./PostList";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

let Domain = "http://localhost:8000/api/posts/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
    this.state = { Posts: [] };
  }
  componentDidMount() {
    this.handleFetch();
  }
  async handleFetch() {
    try {
      const res = await fetch(Domain);
      const Posts = await res.json();
      this.setState({
        Posts: Posts.reverse(),
      });
    } catch (e) {
      console.log(e);
    }
  }
  boastHandleClick = () => {
    fetch(Domain + "Boasts")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          Posts: res,
        })
      );
  };
  roastHandleClick = () => {
    fetch(Domain + "Roasts")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          Posts: res,
        })
      );
  };
  popularHandleClick = () => {
    fetch(Domain + "mostPopular")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          Posts: res,
        })
      );
  };
  lameHandleClick = () => {
    fetch(Domain + "leastPopular")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          Posts: res,
        })
      );
  };

  render() {
    return (
      <Router>
        <div>
          <h1>ROAST OR BOASTS</h1>
          <ul>
            <Link to="/">
              <button onClick={() => this.handleFetch()}>Home</button>
            </Link>
            <Link to="/Boasts">
              <button onClick={() => this.boastHandleClick()}>Boasts</button>
            </Link>
            <Link to="/Roasts">
              <button onClick={() => this.roastHandleClick()}>Roasts</button>
            </Link>
            <Link to="/Popular">
              <button onClick={() => this.popularHandleClick()}>
                Most popular
              </button>
            </Link>
            <Link to="/Lame">
              <button onClick={() => this.lameHandleClick()}>
                Least popular
              </button>
            </Link>
            <Link to="/Create">
              <button>Create a new Roast or Boast</button>
            </Link>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <PostList
                    {...props}
                    Posts={this.state.Posts}
                    update={this.handleFetch}
                  />
                )}
              ></Route>
              <Route
                path="/Boasts"
                render={(props) => (
                  <PostList
                    {...props}
                    Posts={this.state.Posts}
                    update={this.boastHandleClick}
                  />
                )}
              ></Route>
              <Route
                path="/Roasts"
                render={(props) => (
                  <PostList
                    {...props}
                    Posts={this.state.Posts}
                    update={this.roastHandleClick}
                  />
                )}
              ></Route>
              <Route
                path="/Popular"
                render={(props) => (
                  <PostList
                    {...props}
                    Posts={this.state.Posts}
                    update={this.popularHandleClick}
                  />
                )}
              ></Route>
              <Route
                path="/Lame"
                render={(props) => (
                  <PostList
                    {...props}
                    Posts={this.state.Posts}
                    update={this.lameHandleClick}
                  />
                )}
              ></Route>
              <Route path="/Create" render={(props) => <New />}></Route>
            </Switch>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
