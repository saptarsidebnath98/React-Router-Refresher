import { Link, NavLink } from "react-router"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Phase 4 Practice</h2>
            <div>
                <NavLink to="/" className="navLinks">Home</NavLink>
                <NavLink to="/settings" className="navLinks">Settings</NavLink>
                <NavLink to="/settings/innersettings2" className="navLinks">InnerSettings2</NavLink>
                
                <NavLink to="/about" className={({isActive}) => isActive ? "active" : "navLinks"}>About</NavLink>
                <NavLink to="/product/1000/headphone" className="navLinks">Product</NavLink>
                <NavLink to="/file/thefilepath/theextraone/theexceptpath" className="navLinks">File</NavLink>
            </div>

        </div>
    )
}

export default Navbar
