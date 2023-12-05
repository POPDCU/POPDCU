import axios from 'axios';

const API_URL = 'https://port-0-popdcu-back-test-3yl7k2blopd9kw1.sel5.cloudtype.app/api';

export const getCollegeList = async () => {
  try {
    const response = await axios.get(`${API_URL}/ranking`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ranking data:', error);
    throw error; // 에러를 상위 컴포넌트로 전파
  }
};
export const updateCount = async (collegeName, updateCounter) => {
  try {
    const response = await axios.patch(`${API_URL}/count/name/${collegeName}`, { countNumber: updateCounter, });
    console.log(response.data); // 서버에서 반환한 데이터
    return response.data;
  } catch (error) {
    console.error('Error updating count:', error);
    throw error; // 에러를 상위 컴포넌트로 전파
  }
};