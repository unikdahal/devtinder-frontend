import logo from "../assets/logo.png";
import bar from "../assets/bar.svg";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {removeUser} from "../utils/userSlice.js";
import {removeFeed} from "../utils/feedSlice.js";

const NavBar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async()=>{
        try{
            await axios.post("http://localhost:3000/auth/logout",{},{withCredentials: true});
            dispatch(removeUser());
            dispatch(removeFeed());
            return navigate("/login");
        }catch (err){
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col w-full">
            <nav className="navbar justify-between gap-4 bg-base-300">
                <Link className="btn btn-ghost text-lg h-25" to={"/feed"}>
                    <img alt="Logo" src={logo} className="w-50"/>
                </Link>

                {user && (<div className="flex gap-4 text-white">
                    <span className="input w-auto"> Welcome <span
                        className="text-amber-50 font-bold">{user.firstName}</span></span>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Image"
                                    src={user.photoUrl}/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="/profile"><span className="text-white hover:text-amber-200">Profile</span></Link></li>
                            <li><Link to="/connection"><span className="text-white hover:text-amber-200">Connections</span></Link></li>
                            <li><Link onClick={handleLogout}><span className="text-white hover:text-amber-200">Logout</span></Link></li>
                        </ul>
                    </div>
                </div>)}
                {!user && <>
                    <div className="shrink-0 hidden md:flex gap-2 mx-5">
                        <Link className="btn btn-sm btn-ghost" to={"/signup"}>Create Account</Link>
                        <Link className="btn btn-sm btn-primary" to={"/login"}>
                            Log in
                            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>
                        </Link>
                    </div>

                    <div className="dropdown dropdown-end md:hidden">
                        <button className="btn btn-ghost">
                            <img src={bar} className={"w-6"} alt="Menu"/>
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
                </>}
            </nav>
        </div>
    )
}

export default NavBar;