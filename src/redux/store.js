import { combineReducers, createStore} from 'redux';
import courseReducer from './course-reducer';

let reducers = combineReducers({
    coursePage: courseReducer,
});

const store = createStore(reducers);

window.__store__ = store;

export default  store;