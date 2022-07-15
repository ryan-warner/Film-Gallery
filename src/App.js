import './index.css';
import Home from "./Home";
import About from "./About"
import UserHome from "./UserHome";
import Authentication from "./Authentication";
import LogIn from './LogIn';
import SignUp from "./SignUp";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/user" element={<UserHome />}/>
        <Route path="/login" element={<Authentication content={<LogIn />} />}/>
        <Route path="/signup" element={<Authentication content={<SignUp />} />}/>
      </Routes>
    </div>
  );
}

export default App;
