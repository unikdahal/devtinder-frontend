import {Outlet, useNavigate} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {addUser} from "../utils/userSlice.js";

const Body = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/profile/view", {withCredentials: true});
            if (res.status === 200) {
                dispatch(addUser(res.data));
            }
        } catch (error) {
            console.error(error);
            if (!['/login', '/signup'].includes(window.location.pathname)) {
                navigate("/login");
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col flex-grow">
            <NavBar/>
            <div className="flex-grow">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Body;