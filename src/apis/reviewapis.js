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

// id로 리뷰 가져오기
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

// 카테고리에 따른 공고,후기 가져오기 → /search/?large_category=CAREER
export const getSearchByCategory = async (category) => {
    try {
        const response = await axios.get(`${baseURL}/search/?large_category=${category}`);
        return response.data;
    } catch (error) {
        console.error('Error in getSearchByCategory:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// 카테고리에 따른 공고,후기 가져오기 → /review/?large_category=CAREER
export const getReviewByCategory = async (category) => {
    try {
        const response = await axios.get(`${baseURL}/review/?large_category=${category}`);
        return response.data;
    } catch (error) {
        console.error('Error in getReviewByCategory:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// 일반 후기글 작성하기
export const postMyReview = async (review) => {
}