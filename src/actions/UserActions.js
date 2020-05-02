import {changePosition} from "./PositionAppActions";

export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_FNAME = 'CHANGE_FNAME';
export const CHANGE_LNAME = 'CHANGE_LNAME';
export const CHANGE_ROLES = 'CHANGE_ROLES';

export const changeAvatar = (url) => ({
    type: CHANGE_AVATAR,
    payload: url
});

export const changeLogin = (login) => ({
    type: CHANGE_LOGIN,
    payload: login
});

export const changeFName = (fName) => ({
    type: CHANGE_FNAME,
    payload: fName
});

export const changeLName = (lName) => ({
    type: CHANGE_LNAME,
    payload: lName
});

export const changeRoles = (roles) => ({
    type: CHANGE_ROLES,
    payload: roles
});

export const editPassword = (url, pass) => {
    return (dispatch) => {
        let auth;
        if (localStorage.getItem('Authorization')) {
            auth = JSON.parse(localStorage.getItem('Authorization')).auth;
        } else {
            return alert('You not authorization');
        }
        fetch(url, {
            method: "PUT",
            headers: {
                Authorization: auth,
                'X-Password': pass
            }
        })
            .then(() => {
                localStorage.removeItem('Authorization');
                dispatch(changePosition('log'));
            })
            .catch(e => console.log(e));
    }
};

export const editUser = (url, dto) => {
    return (dispatch) => {
        let auth;
        if (localStorage.getItem('Authorization')) {
            auth = JSON.parse(localStorage.getItem('Authorization')).auth;
        } else {
            return alert('You not authorization');
        }
        fetch(url, {
            method: "PUT",
            headers: {
                Authorization: auth,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        })
            .then(resp => resp.json())
            .then((data) => {
                dispatch(changeFName(data.firstName));
                dispatch(changeLName(data.lastName));
                dispatch(changePosition('prof'));
            })
            .catch(e => console.log(e));
    }
};