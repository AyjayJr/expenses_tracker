import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
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
		// must use an arrow function that receives the previous state and returns the new one

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

	return (
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
				<button type='submit'>Add Expense</button>	
			</div>
		</form>
	)
}

export default ExpenseForm;