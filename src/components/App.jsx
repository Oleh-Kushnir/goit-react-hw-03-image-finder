import React, { Component } from 'react';

import SearchBar from './Searchbar/Searchbar';
import Loader from '../components/Loader/Loader';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import ImageGallery from '../components/ImageGallery/ImageGallery';

import { getAllPosts } from '../Fetch';

class App extends Component {
  state = {
    images: [],
    status: 'idle',
    query: '',
    page: 1,
    largeImg: '',
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      this.fetchImg(this.state.query, this.state.page);
    }
    if (prevState.query !== this.state.query) {
      this.setState({ images: [] });
    }
  }

  fetchImg = async (query, page) => {
    try {
      const { hits, totalHits } = await getAllPosts(query, page);
      hits.length === 0
        ? this.setState({ status: 'rejected' })
        : this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalHits,
            status: 'resolved',
          }));
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  };

  onSubmit = query => {
    this.setState({ query, page: 1, images: [] });
    console.log(this.state);
  };

  onClick = e => {
    e.preventDefault();

    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = img => {
    this.setState({ largeImg: img });
  };
  toggleModal = () => {
    this.setState({ largeImg: '' });
  };

  render() {
    const { status, images, totalHits } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 30,
            }}
          >
            Gallery is empty
          </p>
        )}
        {status === 'pending' && <Loader />}
        {totalHits > images.length && <Button onClick={this.onClick} />}
        {this.state.largeImg && (
          <Modal
            toggleModal={this.toggleModal}
            largeImg={this.state.largeImg}
          />
        )}
      </div>
    );
  }
}

export default App;
