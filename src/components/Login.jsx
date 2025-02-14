import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {addUser} from "../utils/userSlice.js";

const Login = () => {
    const [email, setEmail] = useState("unik@gmail.com");
    const [password, setPassword] = useState("Unik@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:3000/auth/login", {email, password},{withCredentials: true});
            console.log("Logged in successfully")
            dispatch(addUser(res.data));
            return navigate("/feed");
        }catch (error) {
            // TBD Handle Error properly
            console.log(error)
        }
    }

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google/login";
    };

    return (<div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md">
            <h1 className="text-3xl font-bold self-center">Log in</h1>

            <span className="self-center">
                    Don&#39;t have an account?&nbsp;&nbsp;
                <Link className="link link-secondary hover:font-bold" to={"/signup"}>Register</Link>
                </span>

            <a className="btn btn-neutral bg-neutral-content hover:bg-secondary-content" onClick={handleGoogleLogin}>
                <i className="fa-brands fa-google text-primary"></i>
                <span>Log in with Google</span>
            </a>

            <div className="divider">OR</div>

            <label className="form-control">
                <div className="label">
                    <span className="label-text">&nbsp;&nbsp;Email</span>
                </div>
                <br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                       className="input input-bordered mt-2"/>
            </label>

            <label className="form-control">
                <div className="label">
                    <span className="label-text">Password</span>
                    <a className="label-text link link-accent hover:font-bold">Forgot password?</a>
                </div>

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       className="input input-bordered mt-2"/>
            </label>

            <button className="btn btn-primary mt-3" onClick={handleLogin}>Log in</button>
        </div>
    </div>)
}

export default Login;