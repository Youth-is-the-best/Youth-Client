import axios from "axios";

export const baseURL = "https://maknaengee.p-e.kr";

// 리뷰 가져오기
export const getReview = async () => {
    try {
        const response = await axios.get(`${baseURL}/review/`);
        return response.data;
    } catch (error) {
        console.error('Error in getReviw:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export const getReviewById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/review/${id}`);
        return response.data;
    } catch (error) {
        alert('리뷰를 찾을 수 없습니다.');
        console.error('Error in getReviewById:', error.response ? error.response.data : error.message);
        throw error;
    }
}