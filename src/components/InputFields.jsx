import React, { useState } from "react";
import { uniqueId } from "../utils";

function InputFields({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      cat: categoryValue,
      type: type,
    };

    onNewTransaction(data);

    setNameValue("");
    setAmountValue("");
    setCategoryValue("");
  };

  return (
    <div>
      <form className="transaction-form">
        <h2>Suivi votre montant</h2>
        <br />
        <label>
          La Description
          <div>
            <input
              type="text"
              className="form-control"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
        </label>
        <label>
          Montant
          <div>
            <input
              type="number"
              className="form-control"
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            />
          </div>
        </label>
        <div>
          Categorie :
          <select
            name="cat"
            className="form-select form-select-sm mb-3"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="atr">Autre</option>
            <option value="msn">Maison</option>
            <option value="edu">Education/école</option>
            <option value="vtr">Voiture</option>
            <option value="nrt">Aliments/épicerie</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={(e) => addTransaction("income", e)}
          >
            Ajouter le revenu :
          </button>
          <br />
          <button
            className="btn btn-secondary"
            onClick={(e) => addTransaction("expense", e)}
          >
            Ajouter le frais :
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputFields;
