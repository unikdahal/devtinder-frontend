import Body from "./components/Body.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./components/Feed.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Provider store={appStore}>
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path="/" element={<Body/>}>
                            <Route path={"/feed"} element={<Feed/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path={"/signup"} element={<SignUp/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App;