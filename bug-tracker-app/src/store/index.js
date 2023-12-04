import bugsReducer from '../bugs/reducers/bugsReducer';
import { createStore } from 'redux';

const store = createStore(bugsReducer);

export default store;