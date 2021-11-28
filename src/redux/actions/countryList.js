import * as taskConstants from '../../constants/countryList';

export const fetchCountryList = () => {
    return {
        type: taskConstants.FETCH_COUNTRY_LIST,
    };
};



///////////sssssssssssssssssssss////////////////////////l
// export const fetchCountryListSuccess = (data) => {
//     return {
//  
///ddddddddddd
// sssssssss
//////////////////rrrrrrrrrrrrrr


export const fetchCountryListFailed = (error) => {
    return {
        type: taskConstants.FETCH_COUNTRY_LIST_FAIL,
        payload: {
            error
        }
    };
}

