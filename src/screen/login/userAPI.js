import axios from "axios";

export async function postLoginUser(dataToSubmit, onLoginUser) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, dataToSubmit);

    localStorage.setItem("user-token", res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}

export async function createUser(dataToSubmit, onLoginUser) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, {
      ...dataToSubmit,
      passwordCheck: dataToSubmit.password,
    });

    localStorage.setItem("user-token", res.data.token);
    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}

export async function registKey(dataToSubmit, onLoginUser) {
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/users/key`, dataToSubmit);

    onLoginUser();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response.data.message);
    } else {
      alert("알 수 없는 에러가 발생하였습니다.\n잠시 후에 다시 시도해주세요.");
    }
  }
}
