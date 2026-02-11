import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); 
  const [Time,setTime] = useState({}) ; 
  async function fetchtime() { 
    const time=await fetch(`https://api.aladhan.com/v1/timingsByCity
?city=Sfax
&country=Tunisia
&method=3
&school=0
&latitudeAdjustmentMethod=3
&timezonestring=Africa/Tunis
&tune=2,1,0,0,1,0,0,5

`) ; 
    const data=await time.json() ;
    setTime(data.data.timings) ;
    
  } 
  useEffect(() => { 
    fetchtime() ;
   },[]);
   

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
        body: JSON.stringify({ title: task, description: description }),
      });

      if (response.ok) {
        setMessage('✓ Task added to Notion!'); 
        setTask('');
        setDescription('');
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
    <div className="time-display">
        <h2>Prayer Times for Sfax, Tunisia</h2>
        <ul>
          <li>Fajr: {Time.Fajr}</li>
          <li>Dhuhr: {Time.Dhuhr}</li>
          <li>Asr: {Time.Asr}</li>
          <li>Maghrib: {Time.Maghrib}</li>
          <li>Isha: {Time.Isha}</li>
        </ul>
      </div>
      <div className="container">
        <h1><img src="./image/Notion-logo.svg.png" alt="Notion Logo" width="40" height="40" /> My Task Manager</h1>
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
          <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description..."
          disabled={loading}
          className="description-input"
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
