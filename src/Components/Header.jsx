import { Link } from "react-router-dom";

function Header() {
    return ( 
    <div class ="container">
         <Link  to="/">Home</Link>
         <Link  to="/about">About</Link>
         <Link  to="/location">Location</Link>
         <Link  to="/contact">Contact</Link>
        
        </div>
    );
}
export default Header;