import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
	const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = {
			...enteredExpenseDate,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);
	}

	return (
		<div className='new-expense'>
			{/* we pass a pointer to saveExpenseDataHandler via props */}
			{/* this allows use to invoke this function from the child component */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense;