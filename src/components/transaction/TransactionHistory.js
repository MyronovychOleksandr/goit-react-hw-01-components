import React from "react";
import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.headContainer}>Type</th>
          <th className={s.headContainer}>Amount</th>
          <th className={s.headContainer}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.itemContainer}>{type}</td>
            <td className={s.itemContainer}>{amount}</td>
            <td className={s.itemContainer}> {currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
