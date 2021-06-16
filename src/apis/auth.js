import { EXPO_BACKEND_API } from '../../config'
import axios from 'axios'

export const login = async (email, password) => {
    return await axios.post(`${EXPO_BACKEND_API}/api/auth/signin`, {
        usernameOrEmail: email,
        password: password
    });
};

export const register = async (name, username, email, password) => {
    return await axios.post(`${EXPO_BACKEND_API}/api/auth/signup`, {
        name,
        username,
        email,
        password,
    });
};