import moment from 'moment';
import {setStartDate, 
        setEndDate, 
        setTextFilter, 
        sortByAmount, 
        sortByDate
    } from '../../actions/filters';

test ('should generate set start date object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test ('should generate set end date object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test ('should set Text filter object with text value', () =>{ 
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER', 
        text: 'Rent'
    });
});

test ('should set Text filter object with default', () =>{ 
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER', 
        text: ''
    });
});

test ('should set sort by object for sort by amount', () =>{ 
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test ('should set sort by bject for sort by date', () =>{
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
 });
