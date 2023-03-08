import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const filterSelectHandler = (filteredYear) => {
    setYear(filteredYear);
    console.log(filteredYear);
  };
  
	return(
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterSelect={filterSelectHandler}/>

      {/* dynamically rendering a list of data using map */}
      {props.expenses.map((expense) => (
      <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}

    </Card>
	)
}

export default Expenses;