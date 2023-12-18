import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
        
      </Routes>
    </div>
  );
}

export default App;
