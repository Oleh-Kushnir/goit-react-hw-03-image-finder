import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { getAllPosts } from '../Fetch';

class App extends Component {
  state = {
    images: [],
    searchName: '',
  };

  componentDidMount() {
    getAllPosts().then(({ data }) => {
      if (data?.hits && data.hits.length) {
        this.setState({ images: data.hits });
      }
    });
  }

  onSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {this.state.images.map(image => (
            <li key={image.id} style={{ margin: '8px', maxWidth: '300px' }}>
              <img
                src={image.webformatURL}
                alt={image.tags}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
