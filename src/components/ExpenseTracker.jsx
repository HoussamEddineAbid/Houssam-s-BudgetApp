import React, { useState, useEffect } from "react";

import Expense from "./Expense";
import TransactionHistory from "./TransactionHistory";
import InputFields from "./InputFields";

import { uniqueId } from "../utils";
import swal from "sweetalert";
import LineChart from "./LineChart";
import BarChart from "./LineChart";

// Aggregator component/container component

const transactionData = [];

function ExpenseTracker() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const saveState = () => {
    localStorage.setItem("expenseTrackerState", JSON.stringify(transactions));
  };

  const calculateExpenses = () => {
    let income = 0,
      expense = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;
      }
    });

    saveState();

    setIncome(income);
    setExpense(expense);
  };

  const handleAddNewTransaction = (item) => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const notifi = (id) => {
    swal({
      title: "Etes-vous sure ?",
      text: "Vous ne pouvez pas récupérer infos supprimé",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newTransactions = transactions.filter((item) => item.id != id);
        setTransactions(newTransactions);
        swal("Bien supprimé !!", {
          icon: "success",
        });
      } else {
        swal(":)");
      }
    });
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("expenseTrackerState"));
    if (localState) {
      setTransactions(localState);
    } else {
      calculateExpenses();
    }
  }, []);

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  return (
    <div>
      <div className="header">
        <h1>Gérer Votre Budget :</h1>
        <Expense income={income} expense={expense} />
      </div>
      <div className="body">
        <InputFields onNewTransaction={handleAddNewTransaction} />
        <TransactionHistory
          transactions={transactions}
          onDeleteTransaction={notifi}
        />
        <div className="ChartT_T">
            <h2>Le Graph Du Budget</h2>
          <BarChart income={income} expense={expense} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
