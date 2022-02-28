import { TodoEntity } from 'app';
import { TodoProps } from 'presentor';
import * as Styled from './Todo.styles';
import { Masonry } from '@mui/lab';
import React from 'react';

const Todo = ({ todos, send }: TodoProps) => {
  const handleDivClick = (todo: TodoEntity) => send({ type: 'TOGGLE_TODO', value: todo });

  const handleButtonClick = (event: React.MouseEvent, todo: TodoEntity) => {
    event.preventDefault();
    event.stopPropagation();
    send({ type: 'REMOVE_TODO', value: todo });
  };

  if (todos.length === 0) return <span>-</span>;

  return (
    <>
      <Masonry columns={1} spacing={1} defaultHeight={450} defaultColumns={4} defaultSpacing={1}>
        {todos
          .sort((a, b) => b.id - a.id)
          .map(todo => (
            <div key={todo.id} onClick={() => handleDivClick(todo)}>
              <Styled.TodoContent>
                <input type="checkbox" checked={todo.completed} onChange={() => undefined} />
                <span>{todo.text}</span>
                <button onClick={event => handleButtonClick(event, todo)}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5L5 19M5.00001 5L19 19"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Styled.TodoContent>
            </div>
          ))}
      </Masonry>
    </>
  );
};

export default Todo;
