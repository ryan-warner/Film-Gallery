import './index.css';
import Home from "./Home";
import About from "./About"
import Library from "./Library";
import Authentication from "./Authentication";
import LogIn from './LogIn';
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Authentication content={<LogIn />} />}/>
        <Route path="/signup" element={<Authentication content={<SignUp />} />}/>
        <Route path="/library" 
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
