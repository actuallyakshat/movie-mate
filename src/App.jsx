import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login-Signup/Login";
import Signup from "./components/Login-Signup/Signup";
import BrowseMovies from "./components/BrowseMovies/BrowseMovies";
import Chat from "./components/Chat/Chat";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="text-2xl">
      <Toaster />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes> */}
      <BrowseMovies />
      <Chat />
    </div>
  );
};

export default App;
