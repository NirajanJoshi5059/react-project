import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between px-4 py-2">
            <h1>Sample Text</h1>
            <nav>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'/about'}>About Us</NavLink>
                <NavLink>Contact Us</NavLink>
            </nav>
        </header>
    )
}

export default Header
