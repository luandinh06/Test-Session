import * as taskContants from '../../constants/totalByTime';

let initialState = [];

var totalResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case taskContants.FETCH_TOTAL_RESULT_BY_TIME: {
            return state;
        }
        case taskContants.FETCH_TOTAL_RESULT_BY_TIME_SUCCESS: {
            const { data } = action.payload;
            return data;
        }
        case taskContants.FETCH_TOTAL_RESULT_BY_TIME_FAIL: {
            return state;
        }
        default:
            return state;
    }
};

export default totalResultReducer;