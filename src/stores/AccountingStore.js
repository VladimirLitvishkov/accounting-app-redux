import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootR'
import thunk from "redux-thunk";

const storage = localStorage.getItem('Authorization') ? JSON.parse(localStorage.getItem('Authorization')).user : undefined;
console.log(storage);
const initialState = {
    user: {
        login: storage ? storage.login : 'default',
        avatar: storage ? storage.avatar : 'https://www.gravatar.com/avatar/0?d=mp',
        firstName: storage ? storage.firstName : '',
        lastName: storage ? storage.lastName : '',
        roles: storage ? storage.roles : []
    },
    position: storage ? 'prof' : 'home'
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;