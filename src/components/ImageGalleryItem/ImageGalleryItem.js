import { ImgStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem =({img, onClick})=>{
    return (
      <ImgStyled
        src={img.webformatURL}
        alt={img.tags}
        onClick={() => onClick(img.largeImageURL)}
      />
    );
}