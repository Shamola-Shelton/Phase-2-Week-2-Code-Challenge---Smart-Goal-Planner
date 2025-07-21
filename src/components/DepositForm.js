import { useState } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!goalId || !amount) return;
    onDeposit(goalId, amount);
    setAmount('');
    setGoalId('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Make Deposit</h2>
      <label>Select Goal:</label>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Choose...</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;