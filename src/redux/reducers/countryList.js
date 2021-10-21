import * as taskContants from '../../constants/countryList';

let initialState = [];

var countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case taskContants.FETCH_COUNTRY_LIST: {
            return [...state];
        }
        case taskContants.FETCH_COUNTRY_LIST_SUCCESS: {
            const { data } = action.payload;
            return data;
        }
        case taskContants.FETCH_COUNTRY_LIST_FAIL: {
            return [...state];
        }
        default:
            return [...state];
    }
};

export default countryListReducer;