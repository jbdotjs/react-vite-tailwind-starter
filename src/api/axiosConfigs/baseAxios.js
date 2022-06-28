import axios from "axios";
import { FORBIDDEN_ERROR_MSG, NOTFOUND_ERROR_MSG } from "../apiVerbiage";
// import { LoginRoute } from "../../configs/routes";

const defaultOptions = {
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { Accept: "application/json", Authorization: "bearer sasadas" },
};
const baseAxiosInstance = axios.create(defaultOptions);

baseAxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("ssoToken");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
baseAxiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201) {
            // router.replace('homepage');
            // window.location.replace(LoginRoute);
            console.log(response);
        } else {
            alert("Unusual behaviour");
            console.warn(response);
        }
        return response;
    },
    (err) => {
        console.log(err);

        if (err.response?.data?.Message) {
            SnackbarUtils.error(err.response.data.Message);
            return;
        }
        if (err.response?.status === 401) {
            SnackbarUtils.error(FORBIDDEN_ERROR_MSG);
            return err;
        }
        if (err.response?.status === 404) {
            SnackbarUtils.error(NOTFOUND_ERROR_MSG);
            return err;
        }

        SnackbarUtils.error(
            err.message || "Something went wrong, please try again."
        );
        return err;
        // Promise.reject(err);
    }
);

export { baseAxiosInstance };

// TODO: Add an interceptor to retry again if fails for some particular reason (500 etc.)
// TODO: Interceptor to redirect to login on 401 type error only when token is invalid
