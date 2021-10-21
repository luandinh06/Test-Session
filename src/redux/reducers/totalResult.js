import * as taskContants from '../../constants/total';

let initialState = [];

var totalResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case taskContants.FETCH_TOTAL_RESULT: {
            return state;
        }
        case taskContants.FETCH_TOTAL_RESULT_SUCCESS: {
            const { data } = action.payload;
            return data;
        }
        case taskContants.FETCH_TOTAL_RESULT_FAIL: {
            return state;
        }
        default:
            return state;
    }
};

export default totalResultReducer;