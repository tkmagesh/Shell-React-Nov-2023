import bugsReducer from '../bugs/reducers/bugsReducer';
import { projectsReducer  } from '../projects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

console.log(thunk);


/* 
function loggerMiddleware(store){
    return function(next){
        return function actionHandler(action){
            console.group(action.type);
            console.log('Before -> ', store.getState())
            console.log('Action -> ', action)
            next(action);
            console.log('After -> ', store.getState())
            console.groupEnd()
        }
    }
} 
*/


const rootReducer = combineReducers({
    bugsStore : bugsReducer,
    projectsStore : projectsReducer
})

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('Before -> ', store.getState())
    console.log('Action -> ', action)
    next(action);
    console.log('After -> ', store.getState())
    console.groupEnd()
}

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState);
    } else {
        next(action);
    }
}


// after adding middleware
//const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("store.dispatch=>", store.dispatch);

// before adding middleware
/* const store = createStore(rootReducer);
console.log(store.dispatch); */

export default store;