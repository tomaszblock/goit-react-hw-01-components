import data from '../json/transactions.json'


const Transaction = ({ props }) => {
  return (
<tbody>
{props.map(prop => (
    <tr>
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
<table className="transaction-history">
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


