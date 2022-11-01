import React from "react";

function Expense({ income, expense }) {
  return (
    <div>
      <div className="row1 row-expense">
        <div className="col1 col-balance">
          <span>
            <h3>Votre balance</h3>
            <div className="balance-text">{income - expense} MAD (dirhams)</div>
          </span>
        </div>
        <div className="col1 col-income">
          <span>
            <h3>Le revenu</h3>
            <div className="income-text">{income} MAD (dirhams)</div>
          </span>
        </div>
        <div className="col1 col-expense">
          <h3>Les frais</h3>
          <div className="expense-text">{expense} MAD (dirhams)</div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
