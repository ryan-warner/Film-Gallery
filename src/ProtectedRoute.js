import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;