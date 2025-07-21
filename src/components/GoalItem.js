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
    <div className="goal-card">
      {isEditing ? (
        <form className="space-y-4" onSubmit={handleEdit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div>
            <label>Target Amount:</label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              required
              className="input"
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="input"
            />
          </div>
          <div>
            <label>Deadline:</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="flex space-x-2">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium text-gray-800">{goal.name}</h3>
          <p className="text-gray-600">Category: {goal.category}</p>
          <p className="text-gray-600">Target: ${goal.targetAmount}</p>
          <p className="text-gray-600">Saved: ${goal.savedAmount}</p>
          <p className="text-gray-600">Remaining: ${remaining > 0 ? remaining : 0}</p>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-gray-600">Deadline: {goal.deadline}</p>
          <p className="text-gray-600">Days Left: {daysLeft >= 0 ? daysLeft : 'Overdue'}</p>
          {isOverdue && <p className="alert alert-overdue">Overdue!</p>}
          {isWarning && <p className="alert alert-warning">Warning: Less than 30 days left!</p>}
          {isCompleted && <p className="alert alert-completed">Completed!</p>}
          <div className="flex space-x-2 mt-2">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(goal.id)} className="bg-red-500 hover:bg-red-600">
              Delete
            </button>
          </ Facet: {isEditing, handleEdit, setIsEditing} = useState(false);