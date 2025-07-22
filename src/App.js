import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3002/goals');
      if (!res.ok) throw new Error('Failed to fetch goals');
      const data = await res.json();
      setGoals(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching goals:', error);
      setError('Failed to load goals. Please ensure json-server is running.');
    } finally {
      setLoading(false);
    }
  };

  const addGoal = async (goal) => {
    try {
      const res = await fetch('http://localhost:3002/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(goal),
      });
      if (!res.ok) throw new Error('Failed to add goal');
      const newGoal = await res.json();
      setGoals([...goals, newGoal]);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const deleteGoal = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/goals/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Failed to delete goal');
      setGoals(goals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  const updateGoal = async (id, updatedGoal) => {
    try {
      const res = await fetch(`http://localhost:3002/goals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGoal),
      });
      if (!res.ok) throw new Error('Failed to update goal');
      const data = await res.json();
      setGoals(goals.map((goal) => (goal.id === id ? data : goal)));
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const makeDeposit = async (id, amount) => {
    try {
      const goal = goals.find((g) => g.id === id);
      const newSaved = goal.savedAmount + parseFloat(amount);
      await updateGoal(id, { savedAmount: newSaved });
    } catch (error) {
      console.error('Error making deposit:', error);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <DepositForm goals={goals} onDeposit={makeDeposit} />
      <GoalForm onAdd={addGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} />
    </div>
  );
}

export default App;