import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../utils/userSlice.js";
import UserCard from "./UserCard.jsx";

const Profile = () => {
    const user = useSelector((store) => store.user);
    const [formData, setFormData] = useState(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);
    const [error,setError] = useState("");

    const fetchUser = async () => {
        if(user) return;
        try {
            const res = await axios.get("http://localhost:3000/profile/view", {withCredentials: true});
            if (res.status === 200) {
                const data = res.data;
                dispatch(addUser(res.data));
                setFormData(data);
            }else{
                navigate("/login");
            }
            console.log(res.data);
        } catch (error) {
            navigate("/login");
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await axios.patch("http://localhost:3000/profile/update", formData, {withCredentials: true});
            dispatch(addUser(res?.data));
            console.log(res);
            setShowToast(true);
            setTimeout(()=> setShowToast(false), 3000);
        } catch (error) {
            setError(error.response.data);
            console.error(error);
        }
    };

    return user && (
        <div className="flex justify-center gap-2 h-full items-stretch">
            <div className="flex justify-center items-center min-h-screen">
                <form className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md" onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-bold self-center">Edit Profile</h1>
                    <div className="divider my-0"></div>
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
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input
                            name="photoUrl"
                            value={formData.photoUrl}
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
                    <p className="text-red-500">{error}</p>
                    <button type="submit" className="btn btn-primary">Save Profile</button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 min-h-screen h-full">
                <h1 className="text-3xl font-bold self-center mb-2">Preview</h1>
                <UserCard
                    user={formData} preview={true}
                />
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile saved successfully.</span>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Profile;