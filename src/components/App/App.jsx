import React, { Component } from 'react';
import { GlobalStyle } from 'components/Common';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'react-modal';
import { BtnLoadMore } from 'components/Button/Button';
import { fetchApi } from '../Searchbar/fetchApi';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default class App extends Component {
  state = {
    images: null,
    name: '',
    selectedImg: null,
    page: 1,
  };

  handleSearch = name => {
    this.setState(prevState => {
      if (prevState.name === name) {
        return {
          page: prevState.page + 1,
        };
      } else {
        return {
          name: name,
          page: 1,
        };
      }
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.name !== this.state.name
    ) {
      this.handleApi();
    }
  };

  handleApi = () => {
    fetchApi(this.state.name, this.state.page).then(r => {
      this.setState({
        images: r.hits,
      });
    });
  };

  handleSelectImg = url => {
    this.setState({ selectedImg: url });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.images !== null && (
          <ImageGallery
            imageList={this.state.images}
            onSelect={this.handleSelectImg}
          />
        )}
        <BtnLoadMore onClick={this.handleLoadMore} />
        <Modal
          isOpen={this.state.selectedImg !== null}
          style={customStyles}
          onRequestClose={this.closeModal}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}
          >
            <button onClick={this.closeModal}>close</button>
            <img src={this.state.selectedImg} alt="Selected" width={600} />
          </div>
        </Modal>
        <GlobalStyle />
      </div>
    );
  }
}
