import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const filterSelectHandler = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);



  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterSelect={filterSelectHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;