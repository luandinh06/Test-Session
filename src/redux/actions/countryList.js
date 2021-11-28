import * as taskConstants from '../../constants/countryList';

export const fetchCountryList = () => {
    return {
        type: taskConstants.FETCH_COUNTRY_LIST,
    };
};


export const fetchCountryListSuccess = (data) => {
    return {
        type: taskConstants.FETCH_COUNTRY_LIST_SUCCESS,
        payload: {
            data
        }
    };
};
///ddddddddddd
//////////////////rrrrrrrrrrrrrr


export const fetchCountryListFailed = (error) => {
    return {
        type: taskConstants.FETCH_COUNTRY_LIST_FAIL,
        payload: {
            error
        }
    };
}

