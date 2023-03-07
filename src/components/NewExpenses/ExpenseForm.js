import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
	// we always use a string here bc e.target.value is always stored as a string
	// this is an example of using muliple state calls as opposed to just one state call
	const [userTitle, setUserTitle] = useState('');
	const [userAmount, setUserAmount] = useState('');
	const [userDate, setUserDate] = useState('');

	// to use store multiple variables in one state call use and object

	// const [userInput, setUserInput] = useState({
	// 	userTitle: '',
	// 	userAmount: '',
	// 	userDate: ''
	// });

	// event is a default js argument that has details about the event that occurred
	// we are interested in the value property which stores the value in the input field
	const titleChangeHandler = (event) => {
		setUserTitle(event.target.value);

		// setting userinput when there is only one state means u must ensure the other info doesn't get lost
		// here we use spread operator to copy all the other info and then override the title with the new information
		// this creates an issue where we are depending on a previous state

		// setUserInput({
		// 	...userInput,
		// 	userTitle: event.target.value
		// });

		// proper way to set states when you are depending on a previous state

		// setUserInput((prevState) => {
		// 	return {...prevState, userTitle: event.target.value};
		// });
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