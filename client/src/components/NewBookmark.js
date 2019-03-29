import React from 'react';

class SearchBar extends React.Component {
  state = {
    name: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.onAddBookmark(this.state);
      this.name = '';
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <hr />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default NewBookmark;