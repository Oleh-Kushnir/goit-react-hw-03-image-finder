import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
// import { IconContext } from 'react-icons';

import {
  SearchForm,
  Searchbar,
  SearchFormButton,
  SearchFormInput,
} from '../Searchbar/Searchbar.styled.jsx';

class SearchBar extends Component {
  state = { search: '' };

  handleNameChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          ></SearchFormInput>
          <SearchFormButton type="submit">
            <BsSearch />
          </SearchFormButton>
        </SearchForm>
      </Searchbar>
    );
  }
}

export default SearchBar;
