import React from 'react';
import styles from './style.module.scss';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function CovidTable() {
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
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder='Country' />
                </div>
                <div className={styles.chooseDate}>
                    <div className={styles.chooseDateElement}>
                        <DatePicker
                            onChange={onChange}
                            format='DD/MM/YYYY'
                            showToday='true'
                            placeholder='From'
                            size='large'
                            className={styles.datePicker}
                        />
                    </div>
                    <div className={styles.chooseDateElement}>
                        <DatePicker
                            onChange={onChange}
                            format='DD/MM/YYYY'
                            showToday='true'
                            placeholder='To'
                        />
                    </div>
                </div>
                <div
                    className={styles.result}
                >
                    <p className={styles.resultText}>{`Total Confirmed: `}</p>
                    <p className={styles.resultText}>{`Total Deaths: `}</p>
                    <p className={styles.resultText}>{`Total Recovered: `}</p>
                </div>
            </div>

        </div>
    );

    function onChange(date, dateString) {
        console.log(date, dateString);
    }
}

export default CovidTable;