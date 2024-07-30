import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr";


export const postTest = async (reason) => {
    try {
        const response = await axios.post(`${baseURL}/typetest/submit-answer/`, reason);
        return response.data;
    } catch (error) {
        console.error('Error in postTest:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export const getInfo = async() => {
    try {
        const response = await axios.get(`${baseURL}/information/`);
        return response.data;
    } catch (error) {
        console.error('Error in getInfo:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export const getBingo = async () => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");

        const result = await axios.get(`${baseURL}/bingo`, {
            headers: {
                Authorization: `Bearer ${access}`
            },
        });
        return result.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/login";
        } else {
            console.error('Error in getBingo:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export const postBingo = async (bingoData) => {
    try {
        const response = await axios.post(`${baseURL}/bingo/`, bingoData, {
            auth: {
                username: 'tjsqls0411',
                password: 'password1234!'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error in postBingo:', error.response ? error.response.data : error.message);
        throw error;
    }
};