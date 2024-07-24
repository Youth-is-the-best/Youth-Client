//axios 오류 있을 까봐 선빈, 은빈 apis 문서 따로 나누어 진행합니다
import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr/";

export const postTest = async () => {
    try {
        const response = await axios.post(`${baseURL}/typetest/submit-answer/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
