import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
// import { IconContext } from 'react-icons';

import {
  SearchForm,
  SearchBar,
  SearchFormButton,
  SearchFormInput,
} from '../Searchbar/Searchbar.styled.jsx';

class Searchbar extends Component {
  state = { name: '' };

  render() {
    return (
      <SearchBar>
        <SearchForm>
          <SearchFormInput></SearchFormInput>
          <SearchFormButton type="submit">
            <BsSearch />
          </SearchFormButton>
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;
