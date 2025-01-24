import NavBar from "./components/NavBar.jsx";
import Body from "./components/Body.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Body/>}>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/signup"} element={<SignUp/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;