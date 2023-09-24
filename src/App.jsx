import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </main>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
