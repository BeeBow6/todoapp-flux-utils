import React from 'react';
import PropTypes from 'prop-types';
import { VisibilityFilters } from '../actions';
import Todo from './todo';

/**
 * 表示リストを絞り込み
 */
const getVisibleTodos = ({ todos, visibilityFilter }) => {

  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter ' + visibilityFilter);
  }
};

const TodoList = ({ toggleTodo, ...otherProps }) => {

  const visibleTodos = getVisibleTodos(otherProps);

  return (
    <ul>
      {visibleTodos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
};


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
