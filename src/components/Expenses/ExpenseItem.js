import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div classsName="expense-item__description">
        <h2>{title}</h2>
        <div classsName="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Buy</button>
    </Card>
  );
}

export default ExpenseItem;
