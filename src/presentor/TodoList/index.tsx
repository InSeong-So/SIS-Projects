import { Box, Button } from '@mui/material';
import { useMachine } from '@xstate/react';
import React, { useEffect, useState } from 'react';
import { todoMachine } from '../../@machine/TodoMachine';
import Spinner from '../components/Spinner';
import Todo from '../Todo';
import * as Styled from './TodoList.styles';

const TodoList = () => {
  const [openInput, setOpenInput] = useState(false);
  const [{ context }, send] = useMachine(todoMachine);

  const completedTodos = context.todos.filter(todo => todo.completed);
  const proceedingTodos = context.todos.filter(todo => todo.proceeding);
  const incompleteTodos = context.todos.filter(todo => !todo.completed);
  const showFlashScreen = context.showFlashScreen;

  useEffect(() => {
    send('FETCH');
  }, [send]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    send({ type: 'UPDATE_NEW_TODO', value: event.target.value });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    send({ type: 'ADD_TODO' });
  };

  const handleClick = () => {
    send({ type: 'ADD_TODO' });
  };

  if (showFlashScreen) return <Spinner />;

  return (
    <Styled.TodoListWrapper>
      <Styled.TodoInputWrapper>
        <Styled.TodoInputBoxWrapper component="div">
          <Styled.TodoInput contentEditable={true}></Styled.TodoInput>
          <Button>Save</Button>
        </Styled.TodoInputBoxWrapper>
        {/* <input
          type="text"
          value={context.newTodo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
        />
        <button onClick={handleClick}>Add Todo</button> */}
      </Styled.TodoInputWrapper>
      <Styled.TodosWrapper>
        <div>
          <Styled.TodoTitle>Todos</Styled.TodoTitle>
          <Todo todos={incompleteTodos} send={send} />
        </div>
        <div>
          <Styled.TodoTitle>Proceeding</Styled.TodoTitle>
          <Todo todos={proceedingTodos} send={send} />
        </div>
        <div>
          <Styled.TodoTitle>Completed</Styled.TodoTitle>
          <Todo todos={completedTodos} send={send} />
        </div>
      </Styled.TodosWrapper>
    </Styled.TodoListWrapper>
  );
};

export default TodoList;
