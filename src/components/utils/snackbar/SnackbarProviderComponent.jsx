import React, { useRef } from "react";
import { IconButton, Slide } from "@mui/material";
import { Close } from "@mui/icons-material";
import { SnackbarProvider } from "notistack";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../../configs/functionalConfigs";
import { SnackbarUtilsConfigurator } from "./Snackbar";

const SnackbarProviderComponent = () => {
    const notistackRef = useRef();
    const onClickDismiss = (key) => () => {
        notistackRef.current.closeSnackbar(key);
    };
    return (
        <SnackbarProvider
            ref={notistackRef}
            maxSnack={3}
            preventDuplicate={true}
            autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
            TransitionComponent={Slide}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            action={(key) => (
                <IconButton
                    sx={{ color: "#ffe" }}
                    onClick={onClickDismiss(key)}
                    size="small"
                >
                    <Close />
                </IconButton>
            )}
        >
            <SnackbarUtilsConfigurator />
            ...
        </SnackbarProvider>
    );
};

export default SnackbarProviderComponent;
