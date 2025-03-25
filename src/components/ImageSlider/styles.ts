import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Button = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 50%;
  border: none;
  opacity: 1;
  transition: opacity 0.3s;
  left: ${(props) => (props.position === 'left' ? '10px' : 'auto')};
  right: ${(props) => (props.position === 'right' ? '10px' : 'auto')};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
