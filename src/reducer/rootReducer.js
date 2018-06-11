import { combineReducers } from 'redux';

import {postsHaveError,postsAreLoading,postsData} from './postReducer';

export default combineReducers({
  postsHaveError,
  postsAreLoading,
  postsData
});