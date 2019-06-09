import Dispatcher from './dispatcher';

// フィルターの定数
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// アクションの定数
export const TodoActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

let nextTodoId = 0;

// アクションクリエイター
export const TodoActions = {
  /**
   * Todo項目の追加
   * @param {String} text Todoテキスト
   */
  addTodo(text) {
    Dispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      id: nextTodoId++,
      text
    });
  },
  /**
   * 表示の切替
   * @param {Number} id Todo項目のId
   */
  toggleTodo(id) {
    Dispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id
    });
  },
  /**
   * 表示フィルター切替
   * @param {TodoActionTypes} filter 指定するフィルター定数
   */
  setVisibilityFilter(filter) {
    Dispatcher.dispatch({
      type: TodoActionTypes.SET_VISIBILITY_FILTER,
      filter
    });
  }
};

