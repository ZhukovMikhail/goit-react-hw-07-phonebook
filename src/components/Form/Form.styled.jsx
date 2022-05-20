import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { StyledButton } from 'components/Button/Button.Styled';
// import { Formik, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid wheat;
  border-radius: 6px;
  padding: 20px;
`;
export const Item = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 6px;
  background-color: wheat;
`;

export const FormBox = styled.div`
  /* position: relative; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(StyledButton)`
  width: 30px;
  position: absolute;
  top: -5px;
  right: 5px;
`;
