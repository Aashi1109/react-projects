const ExpenseNotFound = (props) => {
  return (
    <div style={{ color: "white", textAlign: 'center', fontSize: '1.2rem', padding: '1rem 0' }}>
      Expenses not found for year {props.year}
    </div>
  );
};

export default ExpenseNotFound;
