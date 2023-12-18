import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <navbar>
        <NavLink>Home</NavLink>
        <NavLink>Contact us</NavLink>
        <NavLink>Support</NavLink>
        <NavLink>About</NavLink>
      </navbar>
    </div>
  );
}

export default App;
