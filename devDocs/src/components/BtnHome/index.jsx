import { Link } from "react-router-dom";
import "./style.css";


const BtnHome = () => {
    return(
        <Link to="/Dashboard" className="glowing-btn" title="O que está esperando?">
            <span className='glowing-txt'>I<span className='faulty-letter'>N</span>ICIAR</span>
        </Link>
    );
};

export default BtnHome;