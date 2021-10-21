import * as taskConstants from '../../constants/total';

export const getListTotalCases = (country) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT,
        payload: {
            country,
        },
    };
}

export const getListTotalCasesSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT_SUCCESS,
        payload: {
            data
        }
    };
}

export const getListTotalCasesFail = (error) => {
    return {
        type: taskConstants.FETCH_TOTAL_RESULT_FAIL,
        payload: {
            error
        }
    };
}

