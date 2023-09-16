import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, onClickImageItem }) => (
  <ul>
    {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        tags={tags}
        smallUrl={webformatURL}
        largeImage={largeImageURL}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </ul>
);
export default ImageGallery;

