import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);

  z-index: 2;
`;
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #5e4774e0;
  filter: hue-rotate(90deg);
  z-index: 1;
  overflow: hidden;
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;

  display: block;
  width: 30px;
  margin-left: 5px;
  border-radius: 6px;
  transition: 500ms;
  background-color: #726885;
  color: wheat;
  border-color: black;

  &:hover,
  :focus {
    background-color: #7f7197;
    color: white;
    border-color: wheat;
  }
`;
