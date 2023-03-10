import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = {
			...enteredExpenseDate,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);
	}

	const openFormHandler = () => { setShowForm(true); };
	const closeFormHandler = () => { setShowForm(false); };

	return (
		<div className='new-expense'>
			{/* we pass a pointer to saveExpenseDataHandler via props */}
			{/* this allows use to invoke this function from the child component */}
			{!showForm && <button onClick={openFormHandler}>Add New Expense</button>}
			{showForm && <ExpenseForm onCancelForm={closeFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
		</div>
	)
}

export default NewExpense;