import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.scss';

import * as countryListAction from '../../redux/actions/countryList';
import * as totalResultAction from '../../redux/actions/totalResult';
import * as totalResultByTimeAction from '../../redux/actions/totalResultByTime';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

function CovidTable() {
    const [showHintContry, setShowHintContry] = useState(() => {
        return false;
    });
    const [showWarning, setShowshowWarning] = useState(() => {
        return false;
    });
    const [inputValue, setInputValue] = useState();
    const [startValue, setStartValue] = useState();
    const [endValue, setEndValue] = useState();

    const countryList = useSelector(state => state.countryList);
    const totalResult = useSelector(state => state.totalResult);
    const totalResultByTime = useSelector(state => state.totalResultByTime);

    let result = {
        Confirmed: 0,
        Deaths: 0,
        Recovered: 0,
    }
    if (totalResult.length > 0) {
        result = totalResult[totalResult.length - 1]
    }

    console.log(totalResult);
    console.log(totalResult);
    console.log(totalResult);

    if (totalResult.length > 0 && totalResultByTime.length > 0) {
        result = totalResultByTime[totalResultByTime.length - 1]
    }

    const dispatch = useDispatch()
    useEffect(() => {
        const action = countryListAction.fetchCountryList();
        dispatch(action);
        return () => {
        }
    }, []);

    return (

        <div className={styles.covidTable}>
            <div
                className={styles.container}>
                <div
                    className={styles.header}>
                    Covid Table
                </div>
                <div
                    className={styles.chooseCountry}>
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder='Country'
                        onChange={(e) => inputValueChange(e)}
                        value={inputValue}
                    />
                </div>
                {renderCountryList(countryList)}
                {renderWarning()}
                <div className={styles.chooseDate}>
                    <div className={styles.chooseDateElement}>
                        <DatePicker
                            onChange={onChangeStart}
                            onClick={onClickInputCountry}
                            format='DD/MM/YYYY'
                            showToday='true'
                            placeholder='From'
                            size='large'
                            className={styles.datePicker}
                        />
                    </div>
                    <div className={styles.chooseDateElement}>
                        <DatePicker
                            onChange={onChangeEnd}
                            format='DD/MM/YYYY'
                            showToday='true'
                            placeholder='To'
                        />
                    </div>
                </div>
                <div
                    className={styles.result}
                >
                    <p className={styles.resultText}>{`Total Confirmed: ${result.Confirmed}`}</p>
                    <p className={styles.resultText}>{`Total Deaths: ${result.Deaths}`}</p>
                    <p className={styles.resultText}>{`Total Recovered: ${result.Recovered}`}</p>
                </div>
            </div>

        </div>
    );

    function onChangeStart(date, dateString) {
        setStartValue(date._d);
        if (endValue) {
            const action = totalResultByTimeAction.getListTotalCasesByTime(inputValue, date._d, endValue);
            dispatch(action);
        }

    }
    function onChangeEnd(date, dateString) {
        setEndValue(date._d);
        if (startValue) {
            const action = totalResultByTimeAction.getListTotalCasesByTime(inputValue, startValue, date._d);
            dispatch(action);
        }
    }

    function onClickInputCountry() {

    }

    function renderCountryList(countryList) {
        if (showHintContry) {
            let filterList = [...countryList]
            filterList = filterList.filter((country) => {
                return country.Country.toLowerCase().includes(inputValue.toLowerCase());
            });

            if (filterList.length <= 0) {
                setShowHintContry(false);
                setShowshowWarning(true);
            }
            else {
                if (showWarning) setShowshowWarning(false);
            }

            return <ul className={styles.hintCountry}>
                {
                    filterList.map(function (item, i) {
                        return <li key={i} onClick={() => { onClickCountry(item.Country) }}>{item.Country}</li>
                    })
                }
            </ul>
        } else {
            return null;
        }
    }

    function renderWarning() {
        if (showWarning) {

            return <p className={styles.warning}>Incorrect country name</p>
        } else {
            return null;
        }
    }

    function inputValueChange(event) {
        const value = event.target.value.trim();
        if (value === '') {
            setShowHintContry(false);
            setInputValue('');
            return null;
        } else {
            setShowHintContry(true);
            setInputValue(value);
        }
    }

    function onClickCountry(params) {
        setInputValue(params);
        setShowHintContry(false);
        const action = totalResultAction.getListTotalCases(params);
        dispatch(action);
    }
}

export default CovidTable;