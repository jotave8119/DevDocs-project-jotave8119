import { Link } from "react-router-dom";
import "./style.css";

const BtnDashboard = () => {
    return(
        <Link to="/" className="glowing-btn" title="Já vai?">
            <span className='glowing-txt'>S<span className='faulty-letter'>A</span>IR</span>
        </Link>
    );
};

export default BtnDashboard;