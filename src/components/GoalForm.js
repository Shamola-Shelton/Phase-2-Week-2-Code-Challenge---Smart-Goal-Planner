import { useState } from 'react';

const GoalForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const createdAt = new Date().toISOString().split('T')[0];
    const savedAmount = 0;
    onAdd({ name, targetAmount: parseFloat(targetAmount), savedAmount, category, deadline, createdAt });
    setName('');
    setTargetAmount('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add New Goal</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Target Amount:</label>
      <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <label>Deadline:</label>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;