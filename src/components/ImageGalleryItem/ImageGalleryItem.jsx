import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  url,
  tags,
  onClickImageItem,
  largeImage,
}) => {
  const onImageClick = () => {
    onClickImageItem({ src: largeImage, alt: tags });
  };
  return (
    <li className="gallery-item" key={id} data-id={id} onClick={onImageClick}>
      <img src={url} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
