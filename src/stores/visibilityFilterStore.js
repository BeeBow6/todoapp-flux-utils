/**
 * TODOリストのフィルターを管理するStore
 */

import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher';
import {
  TodoActionTypes,
  VisibilityFilters
} from '../actions';

class VisibilityFilterStore extends ReduceStore {

  getInitialState() {
    return VisibilityFilters.SHOW_ALL;
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return state;
    }
  }
}

export default new VisibilityFilterStore(Dispatcher);

