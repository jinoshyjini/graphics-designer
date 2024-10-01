import {
    FETCH_START, FETCH_SUCCESS, FETCH_ERROR, UPLOAD_ERROR, UPLOAD_SUCCESS, DESIGN_LIST_SUCCESS,
    LOGIN_SUCCESS, LOGIN_ERROR, UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_ERROR, FETCH_VIDEOS_START, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_ERROR,
    FETCH_REAL_VIDEOS_START, FETCH_REAL_VIDEOS_SUCCESS, FETCH_REAL_VIDEOS_ERROR
} from "../Constants/DesignConstant";

const INIT_STATE = {
    error: null,
    loading: false,
    message: '',
    isUpload: false,
    isUploaderror: false,
    isDesignList: [],
    isDesignSuccess: false,
    isVideoUpload: false,
    isVideoUploaderror: false,
    isVideoList: [],
    isVideoSuccess: false,
    isLogin: false,
    isLoginerror: false,
    category: '',
    videos: [],
    totalPages: 0,
    currentPage: 1,
    realCategory: '',
    realEstate: [],
    totalRealPages: 0,
    currentRealPage: 1
};

export default function Design(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_START:
            return { ...state, error: '', message: '', loading: true };
        case FETCH_SUCCESS:
            return { ...state, error: '', message: '', loading: false };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload, message: action.payload };
        case LOGIN_SUCCESS:
            return { ...state, isLogin: action.payload };
        case LOGIN_ERROR:
            return { ...state, isLoginerror: action.payload };
        case UPLOAD_SUCCESS:
            return { ...state, isUpload: action.payload };
        case UPLOAD_ERROR:
            return { ...state, isUploaderror: action.payload };
        case DESIGN_LIST_SUCCESS:
            return { ...state, isDesignList: action.payload, isDesignSuccess: action?.success };
        case UPLOAD_VIDEO_SUCCESS:
            return { ...state, isVideoUpload: action.payload };
        case UPLOAD_VIDEO_ERROR:
            return { ...state, isVideoUploaderror: action.payload };
        case FETCH_VIDEOS_START:
            return { ...state, loading: true, error: null };
        case FETCH_VIDEOS_SUCCESS:            
            return {
                ...state,
                category: action.payload.category,
                videos: action.payload.videos,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                loading: false
            };           
        case FETCH_VIDEOS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_REAL_VIDEOS_START:
            return { ...state, loading: true, error: null };
        case FETCH_REAL_VIDEOS_SUCCESS:
            return {
                ...state,
                realCategory: action.payload.realCategory,
                realEstate: action.payload.realVideos,
                totalRealPages: action.payload.totalRealPages,
                currentRealPage: action.payload.currentPage,
                loading: false
            };
        case FETCH_REAL_VIDEOS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
