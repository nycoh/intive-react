import {call, put} from 'redux-saga/effects';
import UserService from '../services/user';
import {receiveCountries} from '../actions';


export default function* fetchCountries() {
    const countries = yield call(UserService.fetchCountries);
    yield put(receiveCountries(countries));
}

