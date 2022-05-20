import styled from '@emotion/styled';
// import Button from '@mui/material/Button';

export const StyledItem = styled.li`
  display: flex;
  margin-top: 10px;
  transition: 500ms;
  border-radius: 4px;
  justify-content: space-between;
  padding-left: 10px;
  /* padding-right: 5px; */

  cursor: pointer;

  &:hover {
    background-color: rgba(204, 204, 204, 0.4);
  }

  &.vissible {
    background-color: rgba(204, 204, 204, 0.2);
    transition: 500ms;
  }
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export const StyledButton = styled.button`
  display: block;
  width: 70px;
  margin-left: 5px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 6px;
  color: transparent;
  transition: 500ms;
  visibility: hidden;

  &.show {
    visibility: visible;
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
  }
`;

export const EditFormBox = styled.div`
  display: flex;
  justify-content: center;
`;
