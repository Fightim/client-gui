import axios from 'axios';
import { LOGIN_USER } from './types.js';

export function loginUser(dataToSubmit) {
    axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, dataToSubmit)
        .then(res => {
            console.log(res.data);
            if (res.data.code === 200) {
                console.log("로그인 완료");
                //로그인 성공하면 페이지 이동하게
                //token값 받아옴
            }
        });

    // return{
    //     type:LOGIN_USER,
    //     payload:request
    // }
}