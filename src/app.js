import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const res = await fetch('http://localhost:3000/goals');
    const data = await res.json();
    setGoals(data);
  };

  const addGoal = async (goal) => {
    const res = await fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    });
    const newGoal = await res.json();
    setGoals([...goals, newGoal]);
  };

  const deleteGoal = async (id) => {
    await fetch(`http://localhost:3000/goals/${id}`, { method: 'DELETE' });
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const updateGoal = async (id, updatedGoal) => {
    const res = await fetch(`http://localhost:3000/goals/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal),
    });
    const data = await res.json();
    setGoals(goals.map((goal) => (goal.id === id ? data : goal)));
  };

  const makeDeposit = async (id, amount) => {
    const goal = goals.find((g) => g.id === id);
    const newSaved = goal.savedAmount + parseFloat(amount);
    await updateGoal(id, { savedAmount: newSaved });
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <DepositForm goals={goals} onDeposit={makeDeposit} />
      <GoalForm onAdd={addGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} />
    </div>
  );
}

export default App;