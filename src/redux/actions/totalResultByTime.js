import * as taskConstants from '../../constants/totalByTime';

export const getListTotalCasesByTime = (country, startTime, endTime) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT_BY_TIME,
        payload: {
            country,
            startTime,
            endTime
        },
    };
}

export const getListTotalCasesByTimeSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT_BY_TIME_SUCCESS,
        payload: {
            data
        }
    };
}

export const getListTotalCasesByTimeFail = (error) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT_BY_TIME_FAIL,
        payload: {
            error
        }
    };
}

