import {
    FETCH_START, FETCH_SUCCESS, FETCH_ERROR, UPLOAD_SUCCESS, UPLOAD_ERROR, DESIGN_LIST_SUCCESS,
    LOGIN_SUCCESS, LOGIN_ERROR, UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_ERROR, FETCH_VIDEOS_START, FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_ERROR, FETCH_REAL_VIDEOS_START, FETCH_REAL_VIDEOS_SUCCESS, FETCH_REAL_VIDEOS_ERROR
} from '../Constants/DesignConstant';
import urls from "../../Utilities/AppSettings";
import axios from '../../Utilities/Axios'

let BaseUrl = urls.baseUrl;

// export const SignIn = (formData) => {
//     return async (dispatch) => {
//         dispatch({ type: FETCH_START });
//         try {
//             const response = await axios.post(`${BaseUrl}/login`, formData);
//             dispatch({ type: LOGIN_SUCCESS, payload: response?.data?.status });
//         } catch (error) {
//             if (error.message) {
//             } else if (error.request) {
//             } else {
//             }
//             dispatch({ type: LOGIN_ERROR });
//         }
//     };
// };

export const signInStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_SUCCESS, payload: status });
    };
}

export const SignInError = (status) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_ERROR, payload: status });
    };
}

export const uploadBranding = (formData) => async (dispatch) => {
    dispatch({ type: FETCH_START });
    try {
        const response = await axios.post(`${BaseUrl}/images/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        dispatch({ type: UPLOAD_SUCCESS, payload: true });
    } catch (error) {
        let errorMessage = "An error occurred. Please check your network connection.";
        if (error.code === 'ERR_NETWORK') {
            errorMessage = "Network Error: Please check your internet connection.";
        }
        dispatch({ type: UPLOAD_ERROR, payload: true });
    }
};

export const createDesignStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: UPLOAD_SUCCESS, payload: status });
    };
}

export const createDesignErrorStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: UPLOAD_ERROR, payload: status });
    };
}

export const getDesignList = (category) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`${BaseUrl}/images/category/` + category)
            .then(({ data }) => {
                const { status, message, images } = data;
                if (status === "success") {
                    dispatch({ type: FETCH_SUCCESS });
                    dispatch({ type: DESIGN_LIST_SUCCESS, payload: images, success: true });
                } else {
                    dispatch({ type: FETCH_ERROR, payload: message });
                }
            })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: FETCH_ERROR, payload: `Server Error: ${error.response.data.message || error.response.statusText}` });
                } else if (error.request) {
                    dispatch({ type: FETCH_ERROR, payload: "No response from the server." });
                } else {
                    dispatch({ type: FETCH_ERROR, payload: `Request Error: ${error.message}` });
                }
            });
    };
};


export const uploadVideo = (formData) => async (dispatch) => {
    dispatch({ type: FETCH_START });
    try {
        const response = await axios.post(`${BaseUrl}/videos/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        dispatch({ type: UPLOAD_VIDEO_SUCCESS, payload: true });
    } catch (error) {
        let errorMessage = "An error occurred. Please check your network connection.";
        if (error.code === 'ERR_NETWORK') {
            errorMessage = "Network Error: Please check your internet connection.";
        }
        dispatch({ type: UPLOAD_VIDEO_ERROR, payload: true });
    }
};

export const createVideoStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: UPLOAD_VIDEO_SUCCESS, payload: status });
    };
}

export const createVideoErrorStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: UPLOAD_VIDEO_ERROR, payload: status });
    };
}

export const getVideosByCategory = (category, page, size) => async (dispatch) => {
    try {
        const response = await axios.get(`${BaseUrl}/videos/category/${category}`, {
            params: {
                page: page - 1,
                size: size
            }
        });
        console.log(response)
        dispatch({
            type: 'FETCH_VIDEOS_SUCCESS',
            payload: {
                category: response.data.category,
                videos: response.data.videos,
                totalPages: response.data.totalPages,
                currentPage: response.data.currentPage + 1
            }
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_VIDEOS_FAILURE',
            payload: error.message
        });
    }
};

export const getVideosByRealEstate = (category, page, size) => async (dispatch) => {
    try {
        const response = await axios.get(`${BaseUrl}/videos/category/${category}`, {
            params: {
                page: page - 1,
                size: size
            }
        });
        console.log(response)
        dispatch({
            type: 'FETCH_REAL_VIDEOS_SUCCESS',
            payload: {
                realCategory: response.data.category,
                realVideos: response.data.videos,
                totalRealPages: response.data.totalPages,
                currentRealPage: response.data.currentPage + 1
            }
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_REAL_VIDEOS_ERROR',
            payload: error.message
        });
    }
};
