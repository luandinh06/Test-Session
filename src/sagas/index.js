import { call, put, takeLatest } from 'redux-saga/effects';
import { getList } from '../commons/apis/callAPI';

import * as countryListTypes from '../constants/countryList';
import * as totalTypes from '../constants/total';
import * as totalByTimeTypes from '../constants/totalByTime';

import { fetchCountryListSuccess, fetchCountryListFailed } from '../redux/actions/countryList';
import { getListTotalCasesSuccess, getListTotalCasesFail } from '../redux/actions/totalResult';
import { getListTotalCasesByTimeSuccess, getListTotalCasesByTimeFail } from '../redux/actions/totalResultByTime';

function* rootSaga() {
    yield takeLatest(countryListTypes.FETCH_COUNTRY_LIST, fetchListCountry);
    yield takeLatest(totalTypes.FETCH_TOTAL_RESULT, fetchTotal);
    yield takeLatest(totalByTimeTypes.FETCH_TOTAL_RESULT_BY_TIME, fetchTotalByTime);
}

function* fetchListCountry() {
    try {
        const conntryList = yield call(getList, 'countries', countryListTypes.FETCH_COUNTRY_LIST);
        yield put(fetchCountryListSuccess(conntryList.data));
    } catch (error) {
        yield put(fetchCountryListFailed(error));
    }
}

function* fetchTotal({ payload }) {
    const { country } = payload;

    try {
        const total = yield call(getList, 'countries', totalTypes.FETCH_TOTAL_RESULT, country);
        yield put(getListTotalCasesSuccess(total.data));
    } catch (error) {
        yield put(getListTotalCasesFail(error));
    }
}

function* fetchTotalByTime({ payload }) {
    const { country, startTime, endTime } = payload;

    try {
        const total = yield call(getList, 'countries', totalByTimeTypes.FETCH_TOTAL_RESULT_BY_TIME, { country, startTime, endTime });
        yield put(getListTotalCasesByTimeSuccess(total.data));
    } catch (error) {
        yield put(getListTotalCasesByTimeFail(error));
    }
}

export default rootSaga;