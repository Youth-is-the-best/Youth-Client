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

// export const getBingo = async () => {
//     try {
//         const response = await axios.get(`${baseURL}/bingo/`, {
//             auth: {
//                 username: 'tjsqls0411',
//                 password: 'password1234!'
//             },
//             withCredentials: true
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

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

// export const postBingo = async() => {
//     try {
//         const response = await axios.post(`${baseURL}/bingo/`);
//         return response.data;
//     } catch (error) {
//         if (error.response.status === 401) {
//             const response = await getNewRefreshToken();
//             localStorage.setItem("access", response.accessToken);
//             localStorage.setItem("refresh", response.refreshToken);
//             const newResult = await axios.get(`${baseURL}/bingo`, {
//                 headers: {
//                     Authorization: `Bearer ${response.accessToken}`,
//                 },
//             });
//             return newResult.data;
//         } else {
//             console.log(error);
//         }
//     }
// };

export const getNewRefreshToken = async () => {
    try {
        const accessToken = localStorage.getItem("access");
        const refreshtoken = localStorage.getItem("refresh");

        const result = await axios.post(
            `${baseURL}/refresh`,
            {
                refreshtoken,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return result.data;
    }catch (error) {
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    }
}