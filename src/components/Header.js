import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between px-4 py-2">
            <NavLink to='/' replace><h1>Sample Text</h1></NavLink>

            <nav>
                <NavLink to={'/infoform'}>Add Form</NavLink>


            </nav>
            
        </header>
    )
}

export default Header
