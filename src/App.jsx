import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login-Signup/Login";
import Signup from "./components/Login-Signup/Signup";
import BrowseMovies from "./components/BrowseMovies/BrowseMovies";
import Chat from "./components/Chat/Chat";
import Dashboard from "./components/Dashboard/Dashboard";
import Upgrade from "./components/Dashboard/Upgrade";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="text-2xl">
      <Toaster />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/BrowseMovies"
          element={
            <div className="mt-24 mb-16">
              <BrowseMovies />
            </div>
          }
        />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="/dashboard"
          element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </div>
  );
};

export default App;
