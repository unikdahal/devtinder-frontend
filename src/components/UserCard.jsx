import PropTypes from "prop-types";
import axios from "axios";
import {useDispatch} from "react-redux";
import {removeUserFromFeed} from "../utils/feedSlice.js";

const UserCard = ({user, preview}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about} = user;
    const dispatch = useDispatch();

    const handleSendRequest = (status) => async () => {
        try {
            await axios.post(`http://localhost:3000/request/send/${_id}`, {status}, {withCredentials: true});
            dispatch(removeUserFromFeed(_id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure className="mt-2 mx-2">
                <img src={photoUrl} alt="photo"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" disabled={preview} onClick={handleSendRequest("ignore")}>Ignore</button>
                    <button className="btn btn-secondary" disabled={preview} onClick={handleSendRequest("interested")}>Interested</button>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        photoUrl: PropTypes.string,
        age: PropTypes.number,
        gender: PropTypes.string,
        about: PropTypes.string,
    }).isRequired,
    preview: PropTypes.bool,
};

export default UserCard;