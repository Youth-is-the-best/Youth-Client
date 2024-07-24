import axios from "axios";

const baseURL = 'http://maknaengee.p-e.kr/';

export const login = async (username, password) => {
  const result = await axios.post(`${baseURL}/users/login/`, {
    username,
    password,
  })
  console.log(result.data);
  return result.data;
};