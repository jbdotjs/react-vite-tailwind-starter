import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

const SnackbarAlert = () => {
    return (
        <div>
            <Snackbar
                anchorOrigin={["bottom", "center"]}
                open={open}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
            />
        </div>
    );
};

export default SnackbarAlert;
