import React from 'react';
import { ImageGalleryItemImg} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  smallUrl,
  tags,
  onClickImageItem,
  largeImage,
}) => {
  const onImageClick = () => {
    onClickImageItem({ src: largeImage, alt: tags });
  };
  return (
    <li key={id} data-id={id} onClick={onImageClick}>
      <ImageGalleryItemImg src={smallUrl} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
