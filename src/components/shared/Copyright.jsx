import React from "react";
import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";

const Copyright = (props) => {
    return (
        <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            {"Your Company Name  "} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Copyright;
