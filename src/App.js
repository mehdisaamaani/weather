import logo from './logo.svg';
import './App.css';
import User from './component/User';
import {Routes, Route} from 'react-router-dom'
import Cityname from './component/Cityname.js'
function App() {
  return (
    <div className='weather__main'>
     
        <Routes>
        <Route path="/" element={<Cityname/>}/>
       <Route path="/user" element={<User/>}>
        <Route path="/user/:userId"/>
       </Route>
        </Routes>
   
    </div>
  );
}

export default App;
