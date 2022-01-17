import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "c8fda682-9419-4cd0-a588-6231ff2e3f0f"
        // "API-KEY": "69a826e2-7816-4ec3-850b-7b0311ad88b8"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteFollowing(id = 2) {
        return instance.delete(`follow/${id}`);
    },
    createFollowing(id = 2) {
        return instance.post(`follow/${id}`);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(userStatus) {
        return instance.put(`profile/status`, {status: userStatus});
    },
}

export const authAPI = {
    getAuthorization() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};