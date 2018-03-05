import {takeEvery} from 'redux-saga';
import {COUNTRIES_FETCH_REQUESTED} from '../actions';
import fetchCountries from './user';

export default function* root() {
    yield [
        takeEvery(COUNTRIES_FETCH_REQUESTED, fetchCountries)
    ];
}
