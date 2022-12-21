import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;
