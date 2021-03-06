import { userConstants } from '../constants/userConstants';
import { userService } from '../Services/userService/userService';
import { history } from '../Services/reactHistory';

export const userActions = {
    login,
    logout,
    getUserData,
};

function login(userEmail, password) {
    return dispatch => {
        dispatch(request({ userEmail }));

        userService.login(userEmail, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout();
        history.push('/');

        dispatch(request());
    }

    function request() { return { type: userConstants.LOGOUT } }
}

function getUserData() {
    return dispatch => {
        dispatch(request());

        userService.getUserData()
            .then(
                userData => {
                    dispatch(success(userData))
                }
            )
    };

    function request() { return { type: userConstants.REQUEST_USER_DATA } }
    function success(userData) { return { type: userConstants.REQUEST_USER_DATA_SUCCESS, userData } }
}