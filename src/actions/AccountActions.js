import {changeFName, changeLName, changeLogin, changeRoles} from "./UserActions";
import {changePosition} from "./PositionAppActions";
import store from "../stores/AccountingStore";

export const login = (url, auth) => {
    return (dispatch) => {
        let controller = new AbortController();
        fetch(url, {
            method: "POST",
            headers: {
                Authorization: auth,
                signal: controller.signal
            }
        })
            .then(resp => resp.ok ? resp.json() : controller.abort())
            .then(data => {
                dispatch(changeLogin(data.login));
                dispatch(changeFName(data.firstName));
                dispatch(changeLName(data.lastName));
                dispatch(changeRoles(data.roles));
                localStorage.setItem('Authorization', JSON.stringify({auth, user: store.getState().user}));
                dispatch(changePosition('prof'));
            })
            .catch(e => alert('Wrong login or password'));
    }
};

export const registration = (url, dto, auth) => {
    return (dispatch) => {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(changeLogin(data.login));
                dispatch(changeFName(data.firstName));
                dispatch(changeLName(data.lastName));
                dispatch(changeRoles(data.roles));
                localStorage.setItem('Authorization', JSON.stringify({auth, user: store.getState().user}));
                dispatch(changePosition('prof'));
            })
            .catch(e => console.log(e));
    }
};

export const deleteAcc = (url) => {
    return (dispatch) => {
        let auth;
        if (localStorage.getItem('Authorization')) {
            auth = JSON.parse(localStorage.getItem('Authorization')).auth;
        } else {
            return alert('You not authorization');
        }
        fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: auth
            }
        })
            .then(() => {
                localStorage.removeItem('Authorization');
                dispatch(changePosition('home'));
            })
            .catch(e => console.log(e));
    }
};



