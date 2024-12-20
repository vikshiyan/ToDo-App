import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1616;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, { userId, title, completed });
};

export const deleteTodo = (toodoId: number) => {
  return client.delete(`/todos/${toodoId}`);
};

export const updateTodo = (todo: Todo): Promise<Todo> => {
  return client.patch<Todo>(`/todos/${todo.id}`, todo);
};
