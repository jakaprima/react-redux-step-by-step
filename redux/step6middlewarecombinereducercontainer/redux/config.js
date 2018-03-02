import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer/rootReducer'
import {logger, crashReporter, thunk} from './middleware/index'


// const store = createStore(
// 	rootReducer,
// 	{},
// 	compose(applyMiddleware(logger, crashReporter, thunk)),
// 	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// 	);
 const store = createStore(
   rootReducer,
   {},
   compose(
   	applyMiddleware(logger, crashReporter, thunk), 
   	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
   	)
 );


export default store;

