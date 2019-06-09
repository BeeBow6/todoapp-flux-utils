/**
 * TODOの追加と切替
 */

import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher';
import { TodoActionTypes } from '../actions';

class TodosStore extends ReduceStore {

  getInitialState() {
    return [];
  }
  /**
   * 既存の状態とActionの情報をマージして新しい状態を作成する
   * 担当するActionTypeでない場合は、既存の状態をそのまま返す
   * 
   * @param {Object} state 現在の状態
   * @param {Object} action Dispatcher経由で受け取るaction
   * @returns {Object} 新しい状態
   */
  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case TodoActionTypes.TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  }
}

export default new TodosStore(Dispatcher);
