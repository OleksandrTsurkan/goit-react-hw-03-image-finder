import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import getPhotosBySearch from 'API/API';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    photos: [],
    photoName: '',
    page: 1,
  };

  componentDidMount() {}

  componentDidUpdate(_, prevState) {}

  render() {
    return (
      <>
        <Searchbar />
        <ImageGalleryItem />
        <ImageGalleryItem />
      </>
    );
  }
}
