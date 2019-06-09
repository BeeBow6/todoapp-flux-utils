/**
 * Todo追加
 */
import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addTodo }) => {

  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
