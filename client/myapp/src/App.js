import './App.css';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import LenderPage from './Pages/LenderPage.jsx';
import CreateLoan from './Pages/CreateLoan.jsx';
import UpdateLoan from './Pages/UpdateLoan.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/LenderProfile" element={<LenderPage/>}/>
          <Route path="/update" element={<UpdateLoan/>}/>
          <Route path="/CreateLoan" element={<CreateLoan/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
