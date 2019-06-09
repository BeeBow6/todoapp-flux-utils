/**
 * 描画用コンポーネントのルート
 */

import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';
import Footer from './footer';

const App = (props) => (
  <div>
    <AddTodo {...props} />
    <TodoList {...props} />
    <Footer {...props} />
  </div>
);

export default App;
