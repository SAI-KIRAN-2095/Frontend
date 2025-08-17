import './App.css';
import Navbar from './Components/Navbar';
import Nevs from './Components/Nevs';
import Sidebar from './Components/Sidebar';

function App() {
  return (
   <div>
    <div><Navbar/>_________________________________________________________________</div>
   
     <div className='d-flex'> 
      <Sidebar/>
       <Nevs/>
   </div>
    
   
    
   
   
    
    
   </div>
   
  );
}

export default App;
