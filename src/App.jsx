// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="text-2xl">
      <Toaster />
      <Navbar />
      <Home />

      {/* <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes> */}
    </div>
  );
};

export default App;
