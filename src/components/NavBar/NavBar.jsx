import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    // const links = <>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/listed">Listed Book</NavLink></li>
    //     <li><NavLink to="/pages">Pages to Read</NavLink></li> 
    // </>
    return (
        <div className="navbar bg-base-100 lg:px-10 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                            Home
                        </NavLink>
                        <NavLink
                            to='/listed'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                            Listed to Book
                        </NavLink>
                        <NavLink
                            to='/pages'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                           Pages to Read
                        </NavLink>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl font-bold ">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                <NavLink
                            to='/'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                            Home
                        </NavLink>
                        <NavLink
                            to='/listed'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                            Listed to Book
                        </NavLink>
                        <NavLink
                            to='/pages'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                           Pages to Read
                        </NavLink>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                           About
                        </NavLink>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => isActive ?
                                'text-primary font-bold' : 'font-bold'}>
                           Contact
                        </NavLink>
                </ul>
            </div>
            <div className="navbar-end lg:gap-4">
                <a className="btn text-white bg-[#23BE0A]">Sign In</a>
                <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;