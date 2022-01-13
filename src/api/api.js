import axios from "axios";

const data = response => response.data;

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "69a826e2-7816-4ec3-850b-7b0311ad88b8"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(data);
    },
    deleteFollowing(id = 2) {
        return instance.delete(`follow/${id}`).then(data);
    },
    createFollowing(id = 2) {
        return instance.post(`follow/${id}`).then(data);
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI object.");
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(data);
    },
    updateStatus(userStatus) {
        return instance.put(`profile/status`, {status: userStatus}).then(data);
    },
}

export const authAPI = {
    getAuthorization() {
        return instance.get(`auth/me`).then(data);
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(data);
    },
    logout() {
        return instance.delete(`auth/login`).then(data);
    },
};