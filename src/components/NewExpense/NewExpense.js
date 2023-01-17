import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingFlag(false);
  };

  const [isEditingFlag, setEditingFlag] = useState(false);

  const startEditingFlag = () => {
    setEditingFlag(true);
  };

  const stopEditingFlag = () => {
    setEditingFlag(false);
  };

  return (
    <div className="new-expense">
      {!isEditingFlag && (
        <button onClick={startEditingFlag}>Add New Expenses!</button>
      )}
      {isEditingFlag && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onStopEditing={stopEditingFlag}
        />
      )}
    </div>
  );
};

export default NewExpense;