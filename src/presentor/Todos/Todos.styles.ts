import styled from '@emotion/styled';
import { FormGroup as muiFormGroup, Button as muiButton, Box as muiBox } from '@mui/material';

export const TodoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodoTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TodosWrapper = styled(muiBox)`
  margin-top: 2em;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1em;
`;

export const TodoBox = styled.div`
  border: 1px solid #e6e6e6;
  padding: 1em;
`;

export const FormGroup = styled(muiFormGroup)`
  flex-direction: row;
`;

export const Button = styled(muiButton)`
  span {
    margin: 0;
  }
`;
