import {CHANGE_AVATAR, CHANGE_FNAME, CHANGE_LNAME, CHANGE_LOGIN, CHANGE_ROLES} from "../actions/UserActions";


function user(state = {}, action) {
    switch (action.type) {
        case CHANGE_FNAME:
            return {...state, firstName : action.payload ? action.payload : state.firstName};
        case CHANGE_LNAME:
            return {...state, lastName : action.payload ? action.payload : state.lastName};
        case CHANGE_LOGIN:
            return {...state, login : action.payload ? action.payload : state.login};
        case CHANGE_AVATAR:
            return {...state, avatar : action.payload ? action.payload : state.avatar};
        case CHANGE_ROLES:
            return {...state, roles : action.payload ? action.payload : state.roles};
        default :
            return state;
    }
}

export default user;