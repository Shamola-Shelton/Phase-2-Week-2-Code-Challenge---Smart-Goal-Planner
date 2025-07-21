import { useState } from 'react';

const currentDate = new Date('2025-07-21');

const GoalItem = ({ goal, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
  const [category, setCategory] = useState(goal.category);
  const [deadline, setDeadline] = useState(goal.deadline);

  const saved = goal.savedAmount;
  const remaining = targetAmount - saved;
  const progress = Math.min((saved / targetAmount) * 100, 100);
  const deadlineDate = new Date(deadline);
  const timeDiff = deadlineDate - currentDate;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const isCompleted = saved >= targetAmount;
  const isOverdue = daysLeft < 0 && !isCompleted;
  const isWarning = daysLeft < 30 && daysLeft >= 0 && !isCompleted;

  const handleEdit = (e) => {
    e.preventDefault();
    onUpdate(goal.id, { name, targetAmount: parseFloat(targetAmount), category, deadline });
    setIsEditing(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Remaining: ${remaining > 0 ? remaining : 0}</p>
          <div style={{ width: '100%', background: '#ddd', height: '20px' }}>
            <div style={{ width: `${progress}%`, background: 'green', height: '20px' }}></div>
          </div>
          <p>Deadline: {goal.deadline}</p>
          <p>Days Left: {daysLeft >= 0 ? daysLeft : 'Overdue'}</p>
          {isOverdue && <p style={{ color: 'red' }}>Overdue!</p>}
          {isWarning && <p style={{ color: 'orange' }}>Warning: Less than 30 days left!</p>}
          {isCompleted && <p style={{ color: 'green' }}>Completed!</p>}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(goal.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default GoalItem;