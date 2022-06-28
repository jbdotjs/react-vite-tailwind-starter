import axios from "axios";
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
    (error) => {
        // Do something with response error
        console.log(error);
        return Promise.reject(error);
    }
);

export { baseAxiosInstance };

// TODO: Add an interceptor to retry again if fails for some particular reason (500 etc.)
// TODO: Interceptor to redirect to login on 401 type error only when token is invalid
