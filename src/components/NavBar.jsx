import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-col w-full">
            <nav className="navbar justify-between gap-4 bg-base-300">
                <a className="btn btn-ghost text-lg h-25">
                    <img alt="Logo" src={logo} className="w-50"/>
                </a>

                <div className="shrink-0 hidden md:flex gap-2 mx-5">
                    <Link className="btn btn-sm btn-ghost" to={"/signup"}>Create Account</Link>
                    <Link className="btn btn-sm btn-primary" to={"/login"}>
                        Log in
                        <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>
                    </Link>
                </div>

                <div className="dropdown dropdown-end md:hidden">
                    <button className="btn btn-ghost">
                        <i className="fa-solid fa-bars text-lg"></i>
                    </button>

                    <ul tabIndex="0"
                        className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-56 gap-2">
                        <li><a>Create Account</a></li>
                        <a className="btn btn-primary btn-sm">
                            Log in
                            <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
                        </a>
                    </ul>


                </div>
                <div className="dropdown dropdown-end md:hidden">
                    <button className="btn btn-ghost">
                        <i className="fa-solid fa-bars text-lg"></i>
                    </button>

                    <ul tabIndex="0"
                        className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-56 gap-2">
                        <li><a>Create Account</a></li>
                        <a className="btn btn-primary btn-sm">
                            Log in
                            <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;