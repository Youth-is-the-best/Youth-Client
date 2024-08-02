import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr";

// 테스트 답변 입력하기
export const postTest = async (reason) => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");
        const response = await axios.post(`${baseURL}/typetest/submit-answer/`, reason, {
            headers: {
                Authorization: `Bearer ${access}`
            },
        });
        return response.data;
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
    //로그인 없는 버전
    // try {
    //     const response = await axios.post(`${baseURL}/typetest/submit-answer/`, reason);
    //     return response.data;
    // } catch (error) {
    //     console.error('Error in postTest:', error.response ? error.response.data : error.message);
    //     throw error;
    // }
}

// 휴아유 추천 게시물 가져오기
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

// 빙고 등록하기
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

// ["/" 경로에서 볼 수 있는 인포메이션] "최신순"
export const getUpcomming = async () => {
    try {
        const response = await axios.get(`${baseURL}/bingo/recs/upcoming/`);
        return response.data;
    } catch (error) {
        console.error('Error in getUpcomming:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// ["/" 경로에서 볼 수 있는 인포메이션] "보관함"
export const getSaved = async () => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");
        const response = await axios.get(`${baseURL}/bingo/recs/saved/`,{
            headers: {
                Authorization: `Bearer ${access}`
            },
        });
        return response.data;
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
}

// ["/" 경로에서 볼 수 있는 인포메이션] "추천순"
export const getTypeRecommend = async (type) => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");
        const response = await axios.get(`${baseURL}/bingo/recs`, 
        // {
        //     params: { type: type }
        // },
        {
            headers: {
                Authorization: `Bearer ${access}`
            },
        });
        return response.data;
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
}

//빙고 담기 내용 가져오기
export const getBingoloc = async (location) => {
    try {
        const access = localStorage.getItem("access_token");
        if (!access) throw new Error("No access token found in localStorage");
        const result = await axios.get(`${baseURL}/bingo/loc/${location}/`,{
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

// I 눌렀을 때 후기 가져오기
export const getReviewInInfo = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/review/related/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error in getReviewInInfo:', error.response ? error.response.data : error.message);
        throw error;
    }
}