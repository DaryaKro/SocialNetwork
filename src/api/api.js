import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "69a826e2-7816-4ec3-850b-7b0311ad88b8"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteFollowing(id = 2) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    createFollowing(id = 2) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    showProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
};

export const authAPI = {
    getAuthorization() {
        return instance.get(`auth/me`).then(response => response.data);
    },
};