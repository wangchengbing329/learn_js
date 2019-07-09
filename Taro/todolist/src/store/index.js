import {createStore,applyMiddleware} from 'redux';
import thunkMiddlewware from 'redux-thunk';
import {createLogger} from 'redux-logger'

const middlewares = [
    thunkMiddlewware,createLogger()
]
export default function configStore(){
    const store = createStore(rootReducer,applyMiddleware(...middlewares));
    return store;
 
}