import axios from "axios";

import { client } from ".";

const PATH = {
  login: "/auth/login",
  users: "/users",
  key: "/users/key"
}

const ERROR_MESSAGE = {
  unknown: "알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요."
}

const LOCAL_STORAGE_KEY = "user-token";

export async function postLoginUser(dataToSubmit: {
  "email": string;
  "password": string;
}, onLoginUser: () => void) {
  try {
    const res = await client.post(`${import.meta.env.VITE_BASE_URL}${PATH.login}`, dataToSubmit);

    localStorage.setItem(LOCAL_STORAGE_KEY, res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert(ERROR_MESSAGE.unknown);
    }
  }
}

export async function createUser(dataToSubmit: {
  "email": string;
  "password": string;
  "passwordCheck"?: string;
}, onLoginUser: () => void) {
  try {
    const res = await client.post(`${import.meta.env.VITE_BASE_URL}${PATH.users}`, {
      ...dataToSubmit,
      passwordCheck: dataToSubmit.password,
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert(ERROR_MESSAGE.unknown);
    }
  }
}

export async function registKey(dataToSubmit: {
  "accessKey": string;
  "secret": string;
}, onLoginUser: () => void) {
  try {
    await client.post(`${import.meta.env.VITE_BASE_URL}${PATH.key}`, dataToSubmit);

    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
    } else {
      alert(ERROR_MESSAGE.unknown);
    }
  }
}
