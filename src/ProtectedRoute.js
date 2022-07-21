import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const { verifyLogin } = useAuth();
    const token = localStorage.getItem("filmstripToken");

    useEffect(() => {
        const verify = async () => {
            try {
                setIsLoggedIn(await verifyLogin(token));
            } catch (err) {
                setIsLoggedIn(false)
            }
        };
        verify();
    })

    if (isLoggedIn === undefined) {
        return <LoadingSpinner />
    }

    return isLoggedIn ? children : <Navigate to="/login" />

}

export default ProtectedRoute;