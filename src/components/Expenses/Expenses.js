import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const filterSelectHandler = (filteredYear) => {
    setYear(filteredYear);
    props.onFilterChange(filteredYear);
  };
  
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

	return(
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterSelect={filterSelectHandler}/>

      {/* dynamically rendering a list of data using map */}
      {filteredExpenses.map((expense) => (
      <ExpenseItem 
        // key is a necesary unique id for react to render dynamic lists efficiently
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}

    </Card>
	)
}

export default Expenses;