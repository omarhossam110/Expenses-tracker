// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultSelectedValue={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses}/>

      {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p> }
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}   */}

        <ExpensesList items={filteredExpenses}/>


    </Card>
  );
}

export default Expenses;
