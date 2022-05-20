import styled from '@emotion/styled';
export const StyledButton = styled.button`
  display: block;
  width: 120px;
  margin-top: 10px;
  background-color: #726885;
  border-radius: 6px;
  color: wheat;
  transition: 350ms;
  &:hover,
  :focus {
    background-color: #7f7197;
    color: white;
    border-color: wheat;
  }
`;
