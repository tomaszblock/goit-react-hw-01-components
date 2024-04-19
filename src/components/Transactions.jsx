import data from '../json/transactions.json'
import css from "../css/Transactions.module.css";


const Transaction = ({ props }) => {
  return (
<tbody>
{props.map((prop, index) => (
    <tr key={prop.id} className={index % 2 === 1 ? css.dupa : css.dupa2}>
    <td>{prop.type}</td>
    <td>{prop.amount}</td>
    <td>{prop.currency}</td>
  </tr>
  ))}
</tbody>
  );
};

export const Transactions = () => {
  return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <Transaction props={data} />
      </table>
  );
};


