import { combineReducers } from 'redux';

import {postsHaveError,postsAreLoading,postsData,singlepostData} from './postReducer';

export default combineReducers({
  postsHaveError,
  postsAreLoading,
  postsData,
  singlepostData
});