import axiosService from './axiosService';
import * as countryListTypes from '../../constants/countryList';
import * as totalTypes from '../../constants/total';
import * as totalByTimeTypes from '../../constants/totalByTime';

const API_ENDPOINT = 'https://api.covid19api.com/';

export const getList = (resource, style = null, params = {}) => {
    let queryParams = '';
    switch (style) {
        case countryListTypes.FETCH_COUNTRY_LIST:
            queryParams = 'countries';
            break;
        case totalTypes.FETCH_TOTAL_RESULT:
            const now = new Date();
            let date = now.getDate() - 1;
            let month = now.getMonth() + 1;
            let year = now.getFullYear();

            queryParams = `live/country/${params}/status/confirmed/date/${year.toString()}-${month.toString()}-${date.toString()}T00:00:00Z`;
            break;
        case totalByTimeTypes.FETCH_TOTAL_RESULT_BY_TIME:
            const start = `${params.startTime.getFullYear()}-${params.startTime.getMonth() + 1}-${params.startTime.getDate()}`;
            const end = `${params.endTime.getFullYear()}-${params.endTime.getMonth() + 1}-${params.endTime.getDate()}`;
            queryParams = `country/${params.country}?from=${start}T00:00:00Z&to=${end}T00:00:00Z`;
            break;
        default:
            break;
    }
    return axiosService.get(`${API_ENDPOINT}${queryParams}`);
};
