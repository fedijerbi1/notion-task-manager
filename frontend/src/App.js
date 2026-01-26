import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!task.trim()) {
      setMessage('Please enter a task');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: task }),
      });

      if (response.ok) {
        setMessage('✓ Task added to Notion!');
        setTask('');
      } else {
        setMessage('✗ Failed to add task');
      }
    } catch (error) {
      setMessage('✗ Error connecting to server');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 My Task Manager</h1>
        <p className="subtitle">Add tasks directly to Notion</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            disabled={loading}
            className="task-input"
          />
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Adding...' : 'Add Task'}
          </button>
        </form>

        {message && (
          <div className={`message ${message.includes('✓') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
