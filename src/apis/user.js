import axios from "axios";

const baseURL = 'https://maknaengee.p-e.kr';

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

export const isUsernameDuplicate = async (username) => {
  try {
    const response = await axios.get(`${baseURL}/users/join/`, {
      params: { username }
    });
    return response.data.available;
  } catch (error) {
    console.error('username 필드 필요', error);
    throw error;
  }
};

// export const isReferrerExist = async (referrer) => {
//   try {
//     const response = await axios.get(`${baseURL}/users/join/`, {
//       params: { referrer }
//     });
//     return response.data.available;
//   } catch (error) {
//     console.error('username 필드 필요', error);
//     throw error;
//   }
// };

export const SendAuthCodeToEmail = async (answer) => {
  try {
    const result = await axios.post(`${baseURL}/users/verify/`, answer );
    return result.data;
  } catch(error) {
      console.error(error);
      throw error;
  }
}

export const postAuthCode = async (answer) => {
  try {
    const result = await axios.post(`${baseURL}/users/verify/`, answer );
    return result.data;
  } catch(error) {
      console.error(error);
      throw error;
  }
}
