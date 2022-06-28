import React from "react";
import { Button } from "@mui/material";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert" className="w-full h-full col-center">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
            <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
    );
};

export default ErrorFallback;
