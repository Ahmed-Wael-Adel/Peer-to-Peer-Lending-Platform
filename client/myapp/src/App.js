import './App.css';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/LenderSignup.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index="/Home" element={<Home/>}/>  
          <Route path="/Log_in" element={<Login/>}/>
          <Route path="/Lender_sign_up" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
