import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navibar() {
    return (
        <nav className="nav">
            <Link to={"/home"} className="nav-link" aria-current="page" >
                Home
            </Link>    
            <Link to = {"/features"} className="nav-link" >
                Features
            </Link>
            <Link to = {"/pricing"} className="nav-link" >
                Pricing
            </Link>
        </nav>

    );
}

export default Navibar;