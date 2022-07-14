import './index.css';
import Home from "./Home";
import About from "./About"
import UserHome from "./UserHome";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/user" element={<UserHome />}/>
      </Routes>
    </div>
  );
}

export default App;
