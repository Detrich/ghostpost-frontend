import React from "react";

let Domain = "http://localhost:8000/api/posts/";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Posts: [] };
  }
  handleNew = () => {
    let info = this.state
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(info)
    };
    fetch(Domain, requestOptions)
      .then((res) => res.json())
      .then((res) =>{
        if(res){
            this.setState({message:'Post Created'})
        }}
      );
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>Create A Roast or a Boast here</h2>
        <div>
          <form id="roast-boast" onSubmit={this.handleNew}>
            Roast Or Boast ?
            <select id="selectValue" onChange={this.handleChange}>
              <option name="roastorboast" value={this.state.roastorboast}>Roast</option>
              <option name="roastorboast" value={this.state.roastorboast}>Boast</option>
            </select>
            <p></p>
            Body :
            <textarea
              value = {this.state.content}
              placeholder="Max 280 Char"
              rows={4}
              onChange={this.handleChange}
              autoFocus
              name="content"
            ></textarea>
            <p></p>
            <button type='submit'>Submit</button>
          </form>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default New;
