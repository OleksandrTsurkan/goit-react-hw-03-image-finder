import React from 'react';

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
      <img src={smallUrl} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
