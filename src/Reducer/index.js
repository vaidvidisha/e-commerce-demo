import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import RingDetail from './RingDetail';
import Shared from './Shared';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        RingDetail,
        Shared
    }),
    {}, // Set Default state or initial state if needed else set blank as it is.
    compose(
      applyMiddleware(thunk), // added middleware which need through out process or action.
    ),
  );