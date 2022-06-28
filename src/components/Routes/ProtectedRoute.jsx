import React from "react";
import { Navigate } from "react-router-dom";
import { LoginRoute } from "../../configs/routes";

const ProtectedRoute = ({ isLogged, children }) => {
    if (!isLogged) {
        return <Navigate to={LoginRoute} replace />;
    }

    return children;
};

export default ProtectedRoute;
