import PropTypes from "prop-types";
import axios from "axios";
import {useDispatch} from "react-redux";
import {removeRequest} from "../utils/requestSlice.js";

const ConnectionItem = ({imgSrc, name, description, age, isRequest, id}) => {
    const dispatch = useDispatch();

    const handleAction = async (status) => {
        try {
            await axios.post("http://localhost:3000/request/review/" + status + "/" + id, {}, {withCredentials: true});
            dispatch(removeRequest(id));
        } catch (error) {
            console.error(error);
        }
    }
    return (

        <li className="list-row">
            <div><img className="size-10 rounded-box" src={imgSrc} alt={name}/></div>
            <div>
                <div>{name}</div>
                <div className="flex gap-5">
                    <div className="text-xs opacity-60">{age}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{description}</div>
                </div>

            </div>
            {isRequest && (
                <>
                    <button className="btn btn-active btn-success" onClick={() => handleAction("accepted")}>Accept
                    </button>
                    <button className="btn btn-active btn-error" onClick={() => handleAction("rejected")}>Reject
                    </button>

                </>
            )}
        </li>);
}


ConnectionItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isRequest: PropTypes.bool,
    id: PropTypes.string
};

export default ConnectionItem;
