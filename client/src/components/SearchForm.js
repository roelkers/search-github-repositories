import React from 'react';

class SearchForm extends React.Component {
  state = {
    searchTerm: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm.trim()) {
      this.props.onSearchRepository(this.state.searchTerm);
      this.searchTerm = '';
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='searchForm'>
        <input
          type="text"
          placeholder="repository name"
          name="searchTerm"
          onChange={this.handleInputChange}
          value={this.state.searchTerm}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;