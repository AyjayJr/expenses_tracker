import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
	// we always use a string here bc e.target.value is always stored as a string
	// this is an example of using muliple state calls as opposed to just one state call
	const [userTitle, setUserTitle] = useState('');
	const [userAmount, setUserAmount] = useState('');
	const [userDate, setUserDate] = useState('');
	const [showForm, setShowForm] = useState(false);

	// event is a default js argument that has details about the event that occurred
	// we are interested in the value property which stores the value in the input field
	const titleChangeHandler = (event) => { setUserTitle(event.target.value); };
	const amountChangeHandler = (event) => { setUserAmount(event.target.value); };
	const dateChangeHandler = (event) => { setUserDate(event.target.value); };

	const submitHandler = (event) => {
		// this stops the page from sending a request and reloading when the form submit button is pressed
		event.preventDefault();
		const expenseData = {
			title: userTitle,
			amount: userAmount,
			date: new Date(userDate)
		};

		// here we are calling the function in parent componenet NewExpense and passing the entered the date
		props.onSaveExpenseData(expenseData)

		// this is to reset the form values on submit
		setUserTitle('');
		setUserAmount('');
		setUserDate('');
	};

	const openFormHandler = () => { setShowForm(true); };
	const closeFormHandler = () => { setShowForm(false); };

	let content = <button onClick={openFormHandler}>Add New Expense</button>

	if (showForm) {
		content = (
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input type='text' value={userTitle} onChange={titleChangeHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input type='number' min='0.01' value={userAmount} step='0.01' onChange={amountChangeHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input type='date' min='2019-01-01' value={userDate} max='2023-12-31' onChange={dateChangeHandler} />
					</div>
				</div>
				<div className="new-expense__actions">
					<button onClick={closeFormHandler}>Cancel</button>
					<button type='submit'>Add Expense</button>
				</div>
			</form>
		);
	}

	return (
		<div>
			{content}
		</div>
	)
}

export default ExpenseForm;