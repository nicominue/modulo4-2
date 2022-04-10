import { SET_LOADING } from "../constants";

export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        value
    };
    };