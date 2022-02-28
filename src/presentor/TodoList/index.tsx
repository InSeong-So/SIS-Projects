import { Box, Button } from '@mui/material';
import { useMachine } from '@xstate/react';
import React, { useEffect, useRef, useState } from 'react';
import { todoMachine } from '../../@machine/TodoMachine';
import Spinner from '../components/Spinner';
import Todos from '../Todos';
import * as Styled from './TodoList.styles';

const TodoList = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [openInput, setOpenInput] = useState(false);
  const [{ context }, send] = useMachine(todoMachine);

  const completedTodos = context.todos.filter(todo => todo.completed);
  const proceedingTodos = context.todos.filter(todo => todo.proceeding);
  const incompleteTodos = context.todos.filter(todo => !todo.completed);
  const showFlashScreen = context.showFlashScreen;

  useEffect(() => {
    send('FETCH');
  }, [send]);

  const handleClick = () => {
    send({ type: 'UPDATE_NEW_TODO', value: inputRef.current?.textContent });
    send({ type: 'ADD_TODO' });

    (inputRef.current as HTMLDivElement).textContent = '';
  };

  if (showFlashScreen) return <Spinner />;

  return (
    <Styled.TodoListWrapper>
      <Styled.TodoInputWrapper>
        <Styled.TodoInputBoxWrapper component="div">
          <Styled.TodoInput
            ref={inputRef}
            suppressContentEditableWarning={true}
            contentEditable={true}
          ></Styled.TodoInput>
          <Button onClick={handleClick}>Save</Button>
        </Styled.TodoInputBoxWrapper>
      </Styled.TodoInputWrapper>
      <Styled.TodosWrapper>
        <Styled.TodosBox>
          <Todos title="Todos" todos={incompleteTodos} send={send} />
        </Styled.TodosBox>
        <Styled.TodosBox>
          <Todos title="Proceeding" todos={proceedingTodos} send={send} />
        </Styled.TodosBox>
        <Styled.TodosBox>
          <Todos title="Completed" todos={completedTodos} send={send} />
        </Styled.TodosBox>
      </Styled.TodosWrapper>
    </Styled.TodoListWrapper>
  );
};

export default TodoList;
