import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense remove object', () => {
    const action = removeExpense ({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })
});

test('should set up edit expence object', () => {
    const updates = {note: 'New note'};
    const action = editExpense( '123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc', 
        updates:{
            note: 'New note'
        }
    });
})

test('should set up add expense action object with provided values', () => {
    const expensData = {
        description: 'Rent', 
        amount: 10900, 
        createdAt: 1000, 
        note: 'this was last month rent'
    };
    const action = addExpense(expensData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...expensData, 
            id: expect.any(String)
        }
    });
});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0, 
        }
    });
});