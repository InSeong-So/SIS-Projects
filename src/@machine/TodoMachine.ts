/* eslint-disable @typescript-eslint/no-unused-vars */
import { TodoContext, TodoEntity } from 'app';
import { createMachine, assign } from 'xstate';

const persistTodos = (todos: TodoEntity[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  return todos;
};

export const todoMachine = createMachine<TodoContext>({
  id: 'todo',
  initial: 'idle',
  context: {
    todos: [],
    newTodo: '',
    newTodoError: false,
    showFlashScreen: true,
  },
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      invoke: {
        id: 'fetchTodos',
        src: async () => {
          const todos = JSON.parse(localStorage.getItem('todos') || '[]');
          await new Promise(resolve => setTimeout(resolve, 1000));
          return todos;
        },
        onDone: {
          actions: assign({
            todos: (context, event) => event.data,
            showFlashScreen: context => false,
          }),
        },
      },
      on: {
        UPDATE_NEW_TODO: {
          actions: assign({
            newTodo: (context, event) => event.value,
            newTodoError: context => false,
          }),
        },
        ADD_TODO: {
          actions: assign({
            newTodo: context => '',
            newTodoError: context => (context.newTodo.length > 0 ? false : true),
            todos: context => {
              const todos = context.newTodo.length
                ? [
                    ...context.todos,
                    {
                      id: context.todos.length,
                      text: context.newTodo,
                      proceeding: false,
                      completed: false,
                    },
                  ]
                : context.todos;
              return persistTodos(todos);
            },
          }),
        },
        TOGGLE_TODO: {
          actions: assign({
            todos: (context, event) => {
              const todos = context.todos.map(todo =>
                todo.id === event.value.id ? { ...todo, completed: !todo.completed } : todo,
              );
              return persistTodos(todos);
            },
          }),
        },
        REMOVE_TODO: {
          actions: assign({
            todos: (context, event) => {
              const todos = context.todos.filter(todo => todo.id !== event.value.id);
              return persistTodos(todos);
            },
          }),
        },
      },
    },
  },
});
