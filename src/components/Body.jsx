import {Outlet, useNavigate} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {addUser} from "../utils/userSlice.js";

const Body = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchUser = async () => {
        if(user) return;
        try {
            const res = await axios.get("http://localhost:3000/profile/view", {withCredentials: true});
            if (res.status === 200) {
                const data = res.data;
                dispatch(addUser(data));
            }else{
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);
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