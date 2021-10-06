import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';

type Todo = {id: string; name: string; status: string};
const todoAdapter = createEntityAdapter<Todo>({
  selectId: todo => todo.id,
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState(),
  reducers: {
    todoAdded: todoAdapter.addOne,
    todoRemove: todoAdapter.removeOne,
    todoUpdate: todoAdapter.updateOne,
  },
});

export const {todoAdded, todoRemove, todoUpdate} = todoSlice.actions;

export default todoSlice.reducer;
