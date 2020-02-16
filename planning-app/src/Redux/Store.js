import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./AuthReducer";
import projectReducer from "./ProjectReducer";



let reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    project: projectReducer
})



let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store