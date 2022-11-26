import axios from "axios";

import { client } from "../../story/api";

export async function postLoginUser(dataToSubmit: {
  "email": string;
  "password": string;
}, onLoginUser: () => void) {
  try {
    const res = await client.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, dataToSubmit);

    localStorage.setItem("user-token", res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}

export async function createUser(dataToSubmit: {
  "email": string;
  "password": string;
  "passwordCheck"?: string;
}, onLoginUser: () => void) {
  try {
    const res = await client.post(`${import.meta.env.VITE_BASE_URL}/users`, {
      ...dataToSubmit,
      passwordCheck: dataToSubmit.password,
    });

    localStorage.setItem("user-token", res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}

export async function registKey(dataToSubmit: {
  "accessKey": string;
  "secret": string;
}, onLoginUser: () => void) {
  try {
    await client.post(`${import.meta.env.VITE_BASE_URL}/users/key`, dataToSubmit);

    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}
