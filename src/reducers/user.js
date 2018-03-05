import {USER_SAVE_REQUESTED, COUNTRIES_FETCH_SUCCEEDED, SELECT_USER} from '../actions';

const initialState = {
    users: []
};


export default function user(state = initialState, action) {
    switch (action.type) {
        case USER_SAVE_REQUESTED:
            return {
                ...state,
                users: [...state.users, action.user],
                saved: true,
                currentUser: action.user,
                selectedUser: action.user
            };
        case COUNTRIES_FETCH_SUCCEEDED:
            return {...state, countries: action.countries};
        case SELECT_USER:
            return {...state, selectedUser: action.user};
        default:
            return state;
    }
}
