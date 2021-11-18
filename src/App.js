import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Budget from './components/Budget';
import {BrowserRouter as Router,Switch,Route,Routes,browserHistory} from 'react-router-dom'



function App() {
  return (
    <div>
      
      {/*<Register />
      <Login /> 
      <Budget />
      */}
       <Router>
        <Routes>
          <Route path="/"exact element={<Register />} />
          <Route path="/login"exact element={<Login />} />
          <Route path="/budget"exact element={<Budget />} />
        </Routes>   
      </Router>
    
      
      
    </div>
  );
}

export default App;
