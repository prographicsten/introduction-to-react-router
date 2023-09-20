import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <span className="mr-5">My Website</span>
                <NavLink to="/" className="mr-5">Home</NavLink>
                <NavLink to="/users" className="mr-5">Users</NavLink>
                <NavLink to="/posts" className="mr-5">Posts</NavLink>
                <NavLink to="/about" className="mr-5">About</NavLink>
                <NavLink to="/contact" className="mr-5">Contact</NavLink>
                
                {/* <a className="mr-4" href="/">Home</a>
                <a className="mr-4" href="/about">About</a>
                <a className="mr-4" href="/contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;