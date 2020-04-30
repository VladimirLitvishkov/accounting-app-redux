import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootR'
import thunk from "redux-thunk";

const initialState = {
    user: {
        login: 'default',
        avatar: 'https://www.gravatar.com/avatar/0?d=mp',
        firstName: '',
        lastName: '',
        roles: []
    },
    position: 'home'
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;