import axios from 'axios';
import { LOGIN_USER } from './types.js';

export function loginUser(dataToSubmit){
    const request=axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`,dataToSubmit)
    .then(response=>response.data)

    return{
        type:LOGIN_USER,
        payload:request
    }
}