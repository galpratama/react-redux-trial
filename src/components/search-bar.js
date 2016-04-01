/* @flow */

import React, { Component } from 'react';
import autoBind from 'react-autobind';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    autoBind(this);
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
