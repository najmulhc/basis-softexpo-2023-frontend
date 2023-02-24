import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar: React.FC = () => {
    return (
    <div className='navbar-container card-container'>
         <Link to="/">Softexpo2023</Link>
        <div className="button-container">
            <Link to="/add-developer"><button>Add Developer</button></Link>
            <Link to="/add-company"><button>Add Company</button></Link>
        </div>
    </div>
    ); 
}

export default Navbar;