import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modaldiv, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDawn);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDawn);
  }
  handleKeyDawn = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      selectedPhoto: { src, alt },
    } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modaldiv>
          <img src={src} alt={alt} />
        </Modaldiv>
      </Overlay>,
      modalRoot
    );
  }
}
