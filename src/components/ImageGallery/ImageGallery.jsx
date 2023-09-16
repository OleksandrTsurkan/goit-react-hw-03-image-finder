import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGalery = ({ photos, onClickImageItem }) => (
  <ul>
    {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        tags={tags}
        url={webformatURL}
        onClickImageItem={onClickImageItem}
        largeImage={largeImageURL}
      />
    ))}
  </ul>
);
