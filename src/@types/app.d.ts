declare module 'app' {
  export interface TodoEntity {
    id: number;
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
    todos: TodoEntity[];
    send: Sender<any>;
  }
}
