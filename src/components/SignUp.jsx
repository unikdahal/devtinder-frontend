import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {addUser} from "../utils/userSlice.js";
import {useDispatch} from "react-redux";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        age: "",
        about: "",
        termsAccepted: false,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            if(formData.password !== formData.confirmPassword){
                return alert("Passwords do not match");
            }
            if(!formData.termsAccepted){
                return alert("Please accept the terms and conditions");
            }
            if(formData.age < 18){
                return alert("You must be at least 18 years old to sign up");
            }
            if(formData.firstName.length < 2){
                return alert("First name must be at least 2 characters long");
            }
            if(formData.lastName.length < 2){
                return alert("Last name must be at least 2 characters long");
            }
            if(!formData.email.includes("@")){
                return alert("Email is not valid");
            }
            if(formData.password.length < 8){
                return alert("Password is not strong enough");
            }
            const res = await axios.post("http://localhost:3000/auth/signup", formData, {withCredentials: true});
            console.log("Signed up successfully");
            dispatch(addUser(res.data));
            return navigate("/");
        }catch(error){
            console.log(error)
        }
    };

    const handleGoogleSignUp = () => {
        window.location.href = "http://localhost:3000/auth/google/login";
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <form className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold self-center">Create an account</h1>

                <span className="self-center">
                    Already have an account?&nbsp;&nbsp;
                    <Link className="link link-secondary hover:font-bold" to={"/login"}>Log in</Link>
                </span>

                <a className="btn btn-neutral bg-neutral-content hover:bg-secondary-content" onClick={handleGoogleSignUp}>
                    <i className="fa-brands fa-google text-primary"></i>
                    <span>Sign up with Google</span>
                </a>

                <div className="divider my-0">OR</div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">First Name</span>
                    </div>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Last Name</span>
                    </div>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Confirm password</span>
                    </div>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Gender</span>
                    </div>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="select select-bordered"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Age</span>
                    </div>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">About</span>
                    </div>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="textarea textarea-bordered"
                    ></textarea>
                </label>

                <div className="form-control">
                    <label className="cursor-pointer label self-start gap-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="checkbox"
                        />
                        <span className="label-text">
                            I accept the
                            <a className="link link-accent">&nbsp;&nbsp;Terms and Conditions</a>
                        </span>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default SignUp;