import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem, { ExpenseList } from '../../components/ExpenseListItem';

test('should reander ExpenseListItem with expense', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();

});