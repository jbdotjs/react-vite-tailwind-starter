import { useLayoutEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import "./App.css";

import ProtectedRoute from "./components/Routes/ProtectedRoute";
import ErrorFallback from "./components/utils/ErrorFallback";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Copyright from "./components/shared/Copyright";

import { HomePath, LoginRoute } from "./configs/routes";
import { baseAxiosInstance } from "./api/axiosConfigs/baseAxios";

const myErrorHandler = (error, info) => {
    console.log(error);
};

function App() {
    useLayoutEffect(() => {
        const asyncReq = async () => await baseAxiosInstance.get();
        asyncReq();
    }, []);
    return (
        <ErrorBoundary
            onError={myErrorHandler}
            FallbackComponent={ErrorFallback}
            // onReset={() => {
            //   // reset the state of your app so the error doesn't happen again
            // }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Routes>
                    <Route index element={<Login />} />
                    <Route
                        path={HomePath}
                        element={
                            <ProtectedRoute isLogged={false}>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={<Navigate to={LoginRoute} replace />}
                    />
                </Routes>
                <Copyright sx={{ mt: "auto", mb: 3 }} />
            </Box>
        </ErrorBoundary>
    );
}
export default App;
