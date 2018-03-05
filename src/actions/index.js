export const USER_SAVE_REQUESTED = 'USER_SAVE_REQUESTED';

export function requestSaveUser(user) {
    return {type: USER_SAVE_REQUESTED, user};
}

export const COUNTRIES_FETCH_REQUESTED = 'COUNTRIES_FETCH_REQUESTED';
export const COUNTRIES_FETCH_SUCCEEDED = 'COUNTRIES_FETCH_SUCCEEDED';

export function requestCountries() {
    return {type: COUNTRIES_FETCH_REQUESTED};
}

export function receiveCountries(countries) {
    return {type: COUNTRIES_FETCH_SUCCEEDED, countries};
}

export const SELECT_USER = 'SELECT_USER';

export function selectUser(user) {
    return {type: SELECT_USER, user};
}
