import axios from "axios";
import urls from "./AppSettings";

const BASE_URL = urls.baseUrl;

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 401) {
                window.location.replace("/");
                localStorage.clear();
            }
        } else if (error.request) {
            console.error("No response received from server");
        } else {
            console.error("Error in setting up request", error.message);
        }

        return Promise.reject(error);
    }
);

export default api;
