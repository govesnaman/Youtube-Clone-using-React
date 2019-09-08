import React, { Component } from "react";
import "./Search.css"

class Search extends Component {
  state = { term: "" };

  //* User hits enter on search
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  //* Set the value of search bar
  onInputChange = event => {
    this.setState({
      term: event.target.value,
    });
  
  };

  render() {
    return (
      <div className="search">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input id="searchbar" type="text" placeholder = "Search" value={this.state.term}  onChange={this.onInputChange}/>
            <button id="submit" type = "submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
