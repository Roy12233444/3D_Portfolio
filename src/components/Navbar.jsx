import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">SR</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            {/* <NavLink to="/" className={({isActive}) => isActive ? "text-blue-500 border-b-2 border-blue-500 transition-all duration-300" : "border-b-2 border-transparent transition-all duration-300 hover:text-blue-400 hover:border-blue-400"}>Home</NavLink> */}
            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-500 border-b-2 border-blue-500 transition-all duration-300" : "border-b-2 border-transparent transition-all duration-300 hover:text-blue-400 hover:border-blue-400"}>ABOUT</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "text-blue-500 border-b-2 border-blue-500 transition-all duration-300" : "border-b-2 border-transparent transition-all duration-300 hover:text-blue-400 hover:border-blue-400"}>PROJECTS</NavLink>
            {/* <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-500 border-b-2 border-blue-500 transition-all duration-300" : "border-b-2 border-transparent transition-all duration-300 hover:text-blue-400 hover:border-blue-400"}>Contact</NavLink> */}
        </nav>

    </header>
  )
}

export default Navbar