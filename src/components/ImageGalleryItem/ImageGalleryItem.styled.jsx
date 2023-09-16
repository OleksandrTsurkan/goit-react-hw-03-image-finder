import { styled } from 'styled-components';

export const ImageGalleryItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;
