import { Link, NavLink } from "react-router"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Phase 4 Practice</h2>
            <div>
                <Link to="/" className="navLinks">Home</Link>
                <Link to="/settings" className="navLinks">Settings</Link>
                <Link to="/settings/innersettings2" className="navLinks">InnerSettings2</Link>
                
                <NavLink to="/about" className={({isActive}) => isActive ? "active" : "navLinks"}>About</NavLink>
                <Link to="/product/1000/headphone" className="navLinks">Product</Link>
                <Link to="/file/thefilepath/theextraone/theexceptpath" className="navLinks">File</Link>
                <Link to="/searchparams?type=grocery" className="navLinks">SeachParams Usage</Link>
            </div>

        </div>
    )
}

export default Navbar
