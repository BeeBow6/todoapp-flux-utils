/**
 * StoreとViewの接続
 */

import React from 'react';
import { Container } from 'flux/utils';
import TodosStore from '../stores/todosStore';
import VisibilityFilterStore from '../stores/visibilityFilterStore';
import { TodoActions } from '../actions';
import RootApp from '../components/';

class TodoContainer extends React.Component {
  // 参照するStoreを配列で渡す
  static getStores() {
    return [
      TodosStore,
      VisibilityFilterStore
    ];
  }
  // Viewに提供するStateを生成
  // 各イベントハンドラで実行するActionCreatorも追加
  static calculateState() {
    return {
      todos: TodosStore.getState(),
      visibilityFilter: VisibilityFilterStore.getState(),

      ...TodoActions
    };
  }
  // 
  render() {
    return <RootApp {...this.state} />;
  }
}
// 定義したコンポーネントをcreateメソッドに渡す
export default Container.create(TodoContainer);
