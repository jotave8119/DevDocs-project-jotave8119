import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/indext";
import Home from "../pages/home";


const RoutesMain = () => (

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>

);

export default RoutesMain;