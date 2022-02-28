import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const TodoInputWrapper = styled.div``;

export const TodoInputBoxWrapper = styled(Box)`
  width: 400px;
  padding: 16px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodoInput = styled(Box)`
  border: 1px solid grey;
  width: 250px;
  padding: 16px;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const TodoInputBox = styled(Box)``;

export const TodosWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
`;

export const TodoTitle = styled.h3`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
`;
