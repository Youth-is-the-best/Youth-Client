import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr/";

export const postTest1 = async() => {
    try {
        const response = await axios.post(`${baseURL}/typetest/submit-answer/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
