import axios from "axios";

const baseURL = 'http://maknaengee.p-e.kr/';

export const signUp = async (password, username, hash, firstName, lastName, university, college) => {
  const result = await axios.post(`${baseURL}/users/join/`, {
    password, 
    username, 
    hash, 
    firstName, 
    lastName, 
    university, 
    college,
  });
  return result;
};

export const login = async (username, password) => {
  const result = await axios.post(`${baseURL}/users/login/`, {
    username,
    password,
  })
  console.log(result.data);
  return result.data;
};

export const duplicate = async () => {
  try {
    const response = await axios.get(`${baseURL}/users/join/`);
    return response.data.available;
  } catch (error) {
    console.error('username 필드 필요', error);
    throw error;
  }
};
