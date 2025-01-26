// src/components/Connections.jsx
import ConnectionItem from "./ConnectionItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice.jsx";
import axios from "axios";
import { useEffect } from "react";

const Connections = () => {
    const connections = useSelector((store) => store.connection);
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/connections", { withCredentials: true });
            if (res.status === 200) {
                const data = res.data;
                console.log(data)
                dispatch(addConnection(data));
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) return null;

    // return connections.length === 0 ? (
    //     <div className="text-center text-2xl">No Connections</div>
    // ) :

        return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 opacity-60 tracking-wide text-2xl flex font-bold">Connections</li>
                {connections.map((connection) => (
                    <ConnectionItem
                        key={connection._id}
                        imgSrc={connection.photoUrl}
                        name={connection.firstName + " " + connection.lastName}
                        description={connection.about}
                        age={connection.age}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Connections;