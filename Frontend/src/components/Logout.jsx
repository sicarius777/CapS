import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

export default function Logout() {

    const userData = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        userData.setUser({});
        // Simulate a delay to show the spinner
        const timeout = setTimeout(() => {
            navigate('/login');
        }, 2000); // 2 seconds delay
        // Cleanup function to clear timeout
        return () => clearTimeout(timeout);
    }, [userData, navigate]);


    return (
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Logging out...</p>
        </div>
    );
}
