import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "c8fda682-9419-4cd0-a588-6231ff2e3f0f"
        // "API-KEY": "06a96297-6324-4f2b-a3df-3e6be3de24ab"
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
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfile(userProfile) {
        return instance.put(`profile`, userProfile);
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