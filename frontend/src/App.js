
import './App.css'; 
import Quran from './Quran';  
import Tasks from './Tasks' ;  
import Surah from './Surah'; 
 
import {Link,Route,Routes } from 'react-router-dom' ;
import MainPage from './MainPage';

function App() {
  
  return (  
    
    <div>  
    <nav className='Navbar'> 
    <Link to='/'>Home</Link>
    <Link to='/Tasks'>Tasks </Link> 
    <Link to='/Quran'>Quran</Link>
    
    
    </nav> 
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path="/Tasks" element={<Tasks />} />
    
      <Route path="/Quran" element={<Quran />} />
      <Route path="/surah/:number" element={<Surah/>} />
    </Routes>
      
   
    </div>
  );
}

export default App;
