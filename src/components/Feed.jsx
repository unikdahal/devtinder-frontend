import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addFeed } from "../utils/feedSlice.js";
import UserCard from "./UserCard.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [noMoreUsers, setNoMoreUsers] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getFeed = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/feed", { withCredentials: true });
            if (res.data.length === 0) {
                setNoMoreUsers(true);
            } else {
                dispatch(addFeed(res.data));
            }
        } catch (error) {
            console.error('Feed Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }
        getFeed();
    }, [user]);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading feed...</div>;
    }

    return (
        <div className="flex justify-center my-10">
            {feed && feed.length > 0 ? (
                <UserCard user={feed[0]} />
            ) : (
                noMoreUsers && <p>No more users to show</p>
            )}
        </div>
    );
};

export default Feed;