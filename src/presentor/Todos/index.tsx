import { TodoEntity } from 'app';
import { TodoProps } from 'presentor';
import * as Styled from './Todos.styles';
import { Delete, PushPin } from '@mui/icons-material';
import React from 'react';
import { ButtonGroup, Checkbox, FormControlLabel } from '@mui/material';

const Todos = ({ title, todos, send }: TodoProps) => {
  const handleDivClick = (todo: TodoEntity) => send({ type: 'TOGGLE_TODO', value: todo });

  const handleButtonClick = (event: React.MouseEvent, todo: TodoEntity) => {
    event.preventDefault();
    event.stopPropagation();
    send({ type: 'REMOVE_TODO', value: todo });
  };

  return (
    <>
      <Styled.TodoTitle>{title}</Styled.TodoTitle>
      <Styled.TodosWrapper>
        {todos
          .sort((a, b) => b.id - a.id)
          .map(todo => (
            <Styled.TodoBox key={todo.id}>
              <Styled.TodoContent>
                <Styled.FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={todo.completed}
                        onChange={() => handleDivClick(todo)}
                      />
                    }
                    label={todo.text}
                  />
                </Styled.FormGroup>
                <ButtonGroup variant="outlined" aria-label="button group">
                  <Styled.Button
                    startIcon={<PushPin onClick={event => handleButtonClick(event, todo)} />}
                  />
                  <Styled.Button
                    startIcon={<Delete onClick={event => handleButtonClick(event, todo)} />}
                  />
                </ButtonGroup>
              </Styled.TodoContent>
            </Styled.TodoBox>
          ))}
      </Styled.TodosWrapper>
    </>
  );
};

export default Todos;
