import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addRequest} from "../utils/requestSlice.js";
import {useEffect} from "react";
import ConnectionItem from "./ConnectionItem.jsx";

const Requests = () => {

    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const getRequests = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/requests/received", {withCredentials: true});
            if (res.status === 200) {
                const data = res.data;
                dispatch(addRequest(data));
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);

    if (!requests || requests.length === 0) {
        return (<div className="flex justify-center items-center h-96">No Pending Requests</div>);
    }


    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 opacity-60 tracking-wide text-2xl flex font-bold">Connections</li>
                {requests.map((request) => (
                    <ConnectionItem
                        key={request._id}
                        id={request._id}
                        imgSrc={request.photoUrl}
                        name={request.firstName + " " + request.lastName}
                        description={request.about}
                        age={request.age}
                        isRequest={true}
                    />
                ))}
            </ul>
        </div>

    )


}

export default Requests