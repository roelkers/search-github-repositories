import { connect } from 'react-redux';
import { fetchRepositories } from '../actions';
import SearchRepository from '../components/SearchForm';

const mapDispatchToProps = dispatch => {
  return {
    onSearchRepository: searchTerm => {
      dispatch(fetchRepositories(searchTerm));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchRepository);