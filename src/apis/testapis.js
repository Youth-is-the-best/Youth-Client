//axios 오류 있을 까봐 선빈, 은빈 apis 문서 따로 나누어 진행합니다
import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr";

export const postTest = async (reason) => {
    try {
        const response = await axios.post(`${baseURL}/typetest/submit-answer/`, reason);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getInfo = async() => {
    try {
        const response = await axios.get(`${baseURL}/information/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getBingo = async() => {
    try {
        const response = await axios.get(`${baseURL}/bingo/`, { withCredentials : true } );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const postBingo = async() => {
    try {
        const response = await axios.post(`${baseURL}/bingo/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}