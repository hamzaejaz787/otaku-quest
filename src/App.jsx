import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Games = lazy(() => import("./pages/Games"));
const AnimeInfoKitsu = lazy(() => import("./components/AnimeInfoKitsu"));
const AnimeInfoJikan = lazy(() => import("./components/AnimeInfoJikan"));
const GameInfo = lazy(() => import("./components/GameInfo"));
const RecommendedTop = lazy(() => import("./container/RecommendedTop"));

import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <BrowserRouter>
        <Navbar />

        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/games" element={<Games />} />

              <Route path="details" element={<RecommendedTop />}>
                <Route path="kitsu/:id" element={<AnimeInfoKitsu />} />
                <Route path="jikan/:id" element={<AnimeInfoJikan />} />
                <Route path="game/:id" element={<GameInfo />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
