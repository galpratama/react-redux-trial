/* @flow */

import React, { Component } from 'react';
import autoBind from 'react-autobind';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    autoBind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
