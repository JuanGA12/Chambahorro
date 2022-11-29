import { combineReducers, createStore} from 'redux';
import sidebarReducer from './reducers/sidebarReducer';

const rootReducer = combineReducers({
    sidebarReducer,
});

export const store = createStore(rootReducer);