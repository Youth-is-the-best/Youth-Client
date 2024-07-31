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

export const getHueInfo = async() => {
    try {
        const response = await axios.get(`${baseURL}/information/`);
        return response.data;
    } catch (error) {
        console.error('Error in getInfo:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// 빙고 가져오기
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

// 빙고 담기
export const postBingo = async (bingoData) => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");

        const result = await axios.post(`${baseURL}/bingo/`, bingoData, {
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

// 최신 공고 확인하기
export const getUpcomming = async () => {
    try {
        const response = await axios.get(`${baseURL}/bingo/recs/upcoming/`);
        return response.data;
    } catch (error) {
        console.error('Error in getUpcomming:', error.response ? error.response.data : error.message);
        throw error;
    }
}

//빙고 담기 내용 가져오기
export const getBingoloc = async (location) => {
    try {
        const response = await axios.get(`${baseURL}/bingo/recs/${location}/`);
        return response.data;
    } catch (error) {
        console.error('빙고 담긴 내용이 없습니다 :', error.response ? error.response.data : error.message);
        throw error;
    }
}

// I 눌렀을 때 정보 가져오기
export const getInfo = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/bingo/items/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error in getBingoId:', error.response ? error.response.data : error.message);
        throw error;
    }
}