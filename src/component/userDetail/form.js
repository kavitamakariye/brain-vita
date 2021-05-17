import { useState } from "react";
import { isValidateUsername } from "./service/validations";
import "../../index.css";

const UserDetailForm = ({ updateUsername }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidateUsername(username)) {
            updateUsername(username);
        } else {
            alert('Please enter valid username')
        }
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className={`form`}
        >
            <label>User Name: &nbsp;
            <input
                className={`username`}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                </label>
            <input
                type="submit"
                className={`userFormButton`} />
        </form>
    );
};

export default UserDetailForm;
