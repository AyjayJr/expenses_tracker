import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
	// we always use a string here bc e.target.value is always stored as a string
	const [userTitle, setUserTitle] = useState('');
	const [userAmount, setUserAmount] = useState('');
	const [userDate, setUserDate] = useState('');

	// event is a default js argument that has details about the event that occurred
	// we are interested in the value property which stores the value in the input field
	const titleChangeHandler = (event) => {
		setUserTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setUserAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setUserDate(event.target.value);
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
			</div>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
			</div>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' step='2022-12-31' onClick={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type='submit'>Add Expense</button>	
			</div>
		</form>
	)
}

export default ExpenseForm;