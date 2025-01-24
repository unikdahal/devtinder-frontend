import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("unik@gmail.com");
    const [password, setPassword] = useState("unik123");

    const handleLogin = async () => {
        try {
            await axios.post("http://localhost:3000/auth/login", {email, password},{withCredentials: true});
            console.log("Logged in successfully")
        } catch (error) {
            // TBD Handle Error properly
            console.log(error)
        }
    }

    return (<div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md">
            <h1 className="text-3xl font-bold self-center">Log in</h1>

            <span className="self-center">
                    Don&#39;t have an account?&nbsp;&nbsp;
                <a className="link link-secondary hover:font-bold">Register</a>
                </span>

            <a className="btn btn-neutral bg-neutral-content hover:bg-secondary-content">
                <i className="fa-brands fa-google text-primary"></i>
                Log in with Google
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

            <button className="btn btn-primary" onClick={handleLogin}>Log in</button>
        </div>
    </div>)
}

export default Login;