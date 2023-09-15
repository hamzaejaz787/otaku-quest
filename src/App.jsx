import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
