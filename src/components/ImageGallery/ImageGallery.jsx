import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList} from './ImageGallery.styled';

export const ImageGallery = ({ photos, onClickImageItem }) => (
  <ImageGalleryList>
    {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        tags={tags}
        smallUrl={webformatURL}
        largeImage={largeImageURL}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </ImageGalleryList>
);
export default ImageGallery;