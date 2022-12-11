import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { UlStyled, LiStyled } from './ImageGallery.styled';


export default class ImageGallery extends Component {
  // state = {
  //   image: [],
  // };

  render() {
    // console.log(this.props.imageList);
    return (
      <UlStyled>
        {this.props.imageList.map(item => (
          <LiStyled key={item.id}>
            <ImageGalleryItem
              img={item}
              onClick={this.props.onSelect}
            />
          </LiStyled>
        ))}
        
      </UlStyled>
    );
  }
}
