import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const Body = () => {
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