import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseNotFound from "./ExpenseNotFound";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { expenses } = props;

  const [selectedYear, setSelectedYear] = useState("");
  const getSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const renderComponent = (expenses) =>
    expenses.map((data) => (
      <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
    ));

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelect={getSelectedYear}
        selectYear={selectedYear}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      {selectedYear
        ? !filteredExpenses.length && <ExpenseNotFound year={selectedYear} />
        : renderComponent(expenses)}
      {filteredExpenses.length && renderComponent(filteredExpenses)}
    </Card>
  );
}

export default Expenses;
