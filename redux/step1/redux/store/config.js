import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducer/index'
import {logger, laporanError, thunkMiddleware} from '../middleware/index'

    
// const store = createStore(combineReducer, {}, compose(
//     applyMiddleware(logger, crashReporter, thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// ));
const store = createStore(combineReducer, applyMiddleware(logger, laporanError, thunkMiddleware));
 
export default store;