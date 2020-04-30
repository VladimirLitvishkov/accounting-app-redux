import {CHANGE_POSITION} from "../actions/PositionAppActions";


function position(state = 'home', action) {
    switch (action.type) {
        case CHANGE_POSITION:
            return action.payload;
        default:
            return state;
    }
}

export default position;