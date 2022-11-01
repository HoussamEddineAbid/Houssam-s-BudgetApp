import { faBook, faBowlFood, faCar, faCartPlus, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const conditions = (cat) => {
    switch (cat) {
      case "msn":
       return (
          <button> <FontAwesomeIcon icon={faHouse} /> </button>
        );
      case "vtr":
        return (
          <button><FontAwesomeIcon icon={faCar} /></button>
        );
      case "edu":
        return (
          <button> <FontAwesomeIcon icon={faBook} /></button>
        );
      case "nrt":
        return (
          <button> <FontAwesomeIcon icon={faBowlFood} /></button>
        );
      default:
        return (
          <button> <FontAwesomeIcon icon={faCartPlus} /></button>
        );
    }
  };
function TransactionHistory({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <ul className="transactions">
        <h2>VOTRE REVENU & FRAIS :</h2>
        <br />
        {transactions.map((data) => (
          <li key={data.id}>
            <div>{data.name}</div>
            <div>
              <span>{data.amount}MAD (dirhams)</span>
                {conditions(data.cat)}
              <button onClick={() => onDeleteTransaction(data.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
