import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Games from "./pages/Games";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
