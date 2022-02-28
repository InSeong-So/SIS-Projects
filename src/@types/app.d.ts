declare module 'app' {
  export interface TodoEntity {
    id: string;
    text: string;
    proceeding: boolean;
    completed: boolean;
  }

  export interface TodoContext {
    todos: TodoEntity[];
    newTodo: string;
    newTodoError: boolean;
    showFlashScreen: boolean;
  }
}

declare module 'presentor' {
  export interface TodoProps {
    title: string;
    todos: TodoEntity[];
    send: Sender<any>;
  }
}
